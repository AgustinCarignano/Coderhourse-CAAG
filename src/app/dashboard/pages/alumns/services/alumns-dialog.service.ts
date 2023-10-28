import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnsFormComponent } from '../components/alumns-form/alumns-form.component';
import { Alumn } from '../models/alumn.model';
import { Observable } from 'rxjs';
import { ConfirmSnackbarComponent } from 'src/app/shared/components/confirm-snackbar/confirm-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class AlumnsDialogService {
  constructor(private dialog: MatDialog) {}

  public openFormDialog(title: string, alumn?: Alumn): Observable<Alumn> {
    return this.dialog
      .open(AlumnsFormComponent, {
        data: {
          title,
          alumn,
        },
      })
      .afterClosed();
  }

  public openConfirmDialog(): Observable<boolean> {
    return this.dialog.open(ConfirmSnackbarComponent).afterClosed();
  }
}
