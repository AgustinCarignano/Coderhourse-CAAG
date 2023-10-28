import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnsFormComponent } from './components/alumns-form/alumns-form.component';
import { AlumnsTableComponent } from './components/alumns-table/alumns-table.component';
import { AlumnsRoutingModule } from './alumns-routing.module';
import { AlumnsDialogService } from './services/alumns-dialog.service';
import { AlumnDetailComponent } from './components/alumn-detail/alumn-detail.component';

@NgModule({
  declarations: [
    AlumnsComponent,
    AlumnsFormComponent,
    AlumnsTableComponent,
    AlumnDetailComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    AlumnsRoutingModule,
  ],
  exports: [AlumnsComponent],
  providers: [AlumnsDialogService],
})
export class AlumnsModule {}
