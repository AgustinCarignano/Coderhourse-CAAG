import { Component } from '@angular/core';
import { Alumn } from './models/alumn.model';
import { AlumnsService } from './services/alumns.service';
import { Observable } from 'rxjs';
import { AlumnsDialogService } from './services/alumns-dialog.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActionsMessages } from './enums/messages';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss'],
})
export class AlumnsComponent {
  public alumns$: Observable<Alumn[]>;

  constructor(
    private alumnsService: AlumnsService,
    private dialogService: AlumnsDialogService,
    private notificationService: NotificationService
  ) {
    this.alumns$ = this.alumnsService.getAlumns();
  }

  public newAlumn(): void {
    this.dialogService.openFormDialog('New alumn').subscribe({
      next: (data) => {
        if (data) {
          this.alumns$ = this.alumnsService.addAlumn(data);
          this.notificationService.showNotification(ActionsMessages.addedAlumn);
        }
      },
    });
  }

  public editAlumn(alumn: Alumn): void {
    this.dialogService.openFormDialog('Edit alumn', alumn).subscribe({
      next: (data) => {
        if (data) {
          this.alumns$ = this.alumnsService.editAlumn(data);
          this.notificationService.showNotification(
            ActionsMessages.editedAlumn
          );
        }
      },
    });
  }

  public deleteAlumn(alumnId: number): void {
    this.dialogService.openConfirmDialog().subscribe({
      next: (resp) => {
        if (resp) {
          this.alumns$ = this.alumnsService.deleteAlumn(alumnId);
          this.notificationService.showNotification(
            ActionsMessages.deletedAlumn
          );
        }
      },
    });
  }
}
