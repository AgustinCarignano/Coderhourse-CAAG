import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnsComponent } from './alumns.component';
import { Paths } from '../../enums/paths.enum';
import { AlumnDetailComponent } from './components/alumn-detail/alumn-detail.component';

const routes: Routes = [
  { path: '', component: AlumnsComponent },
  { path: Paths.ID, component: AlumnDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnsRoutingModule {}
