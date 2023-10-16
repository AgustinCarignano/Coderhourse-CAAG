import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnsFormComponent } from './components/alumns-form/alumns-form.component';
import { Alumn } from './models/alumn.model';
import { alumnsData } from 'src/app/mockData/alumns/alumnsData';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss'],
})
export class AlumnsComponent {
  public data: Alumn[] = [];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.data = alumnsData.map((a) => new Alumn(a));
  }

  public showNotification(message: string): void {
    this.snackBar.open(message, 'ACEPTAR', {
      verticalPosition: 'top',
      duration: 2000,
    });
  }

  public openFormDialog(alumn?: Alumn): void {
    this.dialog
      .open(AlumnsFormComponent, {
        data: {
          title: 'New Alumn',
          alumn,
        },
      })
      .afterClosed()
      .subscribe({
        next: (data: Alumn) => data && this.editAlumnList(data),
      });
  }

  public openConfirmDialog(alumnId: number): void {
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe({
        next: (resp) => resp && this.deleteAlumn(alumnId),
      });
  }

  private editAlumnList(alumn: Alumn): void {
    let message: string;
    if (alumn.id) {
      this.data = this.data.map((a) => (a.id === alumn.id ? alumn : a));
      message = 'Alumn edited';
    } else {
      const newId = this.data[this.data.length - 1].id + 1;
      this.data = [...this.data, { ...alumn, id: newId }];
      message = 'New Alumn added';
    }
    this.showNotification(message);
  }

  private deleteAlumn(alumnId: number): void {
    this.data = this.data.filter((a) => a.id !== alumnId);
    this.showNotification('Alumn deleted');
  }
}
