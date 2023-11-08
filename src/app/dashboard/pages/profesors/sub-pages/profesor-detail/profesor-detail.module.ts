import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorDetailRoutingModule } from './profesor-detail-routing.module';
import { ProfesorDetailComponent } from './profesor-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonModule } from 'src/app/dashboard/commons/person/person.module';

@NgModule({
  declarations: [ProfesorDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PersonModule,
    ProfesorDetailRoutingModule,
  ],
})
export class ProfesorDetailModule {}
