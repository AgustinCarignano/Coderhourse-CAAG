import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorsRoutingModule } from './profesors-routing.module';
import { ProfesorsComponent } from './profesors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfesorsTableComponent } from './components/profesors-table/profesors-table.component';
import { PersonModule } from '../../commons/person/person.module';
import { ProfesorFormComponent } from './components/profesor-form/profesor-form.component';
import { PersonDialogService } from '../../commons/person/services/person-dialog.service';

@NgModule({
  declarations: [
    ProfesorsComponent,
    ProfesorsTableComponent,
    ProfesorFormComponent,
  ],
  imports: [CommonModule, ProfesorsRoutingModule, SharedModule, PersonModule],
  providers: [PersonDialogService],
})
export class ProfesorsModule {}
