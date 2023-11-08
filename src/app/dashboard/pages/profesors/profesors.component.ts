import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from './models';
import { ProfesorsApiService } from './services/profesors-api.service';
import { PersonDialogService } from '../../commons/person/services/person-dialog.service';
import { PersonForm } from '../../commons/person/models/person-form.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActionsMessages } from 'src/app/core/enums/messages';

@Component({
  selector: 'app-profesors',
  templateUrl: './profesors.component.html',
  styleUrls: ['./profesors.component.scss'],
})
export class ProfesorsComponent {
  public pageTitle = 'Profesors list';
  public buttonLabel = 'new profesor';
  public profesors$: Observable<Profesor[]>;

  constructor(
    private profesorsApiService: ProfesorsApiService,
    private dialogService: PersonDialogService,
    private notificationService: NotificationService
  ) {
    this.profesors$ = this.profesorsApiService.getProfesors();
  }

  public newProfesor(): void {
    this.dialogService
      .openFormDialog('New professor', new PersonForm().form)
      .subscribe({
        next: (data) => {
          if (data) {
            this.profesors$ = this.profesorsApiService.createProfesor(data);
            this.notificationService.showNotification(
              ActionsMessages.addedProfesor
            );
          }
        },
      });
  }

  public editProfesor(profesor: Profesor): void {
    console.log(profesor);
    this.dialogService
      .openFormDialog('New professor', new PersonForm(profesor).form, profesor)
      .subscribe({
        next: (data) => {
          if (data) {
            this.profesors$ = this.profesorsApiService.updateProfesor(data);
            this.notificationService.showNotification(
              ActionsMessages.editedProfesor
            );
          }
        },
      });
  }

  public deleteProfesor(profesorId: number): void {
    this.dialogService.openConfirmDialog().subscribe({
      next: (resp) => {
        if (resp) {
          this.profesors$ = this.profesorsApiService.deleteProfesor(profesorId);
          this.notificationService.showNotification(
            ActionsMessages.deletedProfesor
          );
        }
      },
    });
  }
}
