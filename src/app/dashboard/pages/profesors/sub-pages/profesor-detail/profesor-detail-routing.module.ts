import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorDetailComponent } from './profesor-detail.component';

const routes: Routes = [{ path: '', component: ProfesorDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorDetailRoutingModule { }
