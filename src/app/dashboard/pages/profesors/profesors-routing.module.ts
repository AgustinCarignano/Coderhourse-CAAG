import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorsComponent } from './profesors.component';
import { Paths } from '../../enums/paths.enum';

const routes: Routes = [
  { path: '', component: ProfesorsComponent },
  {
    path: `${Paths.DETAILS}/${Paths.ID}`,
    loadChildren: () =>
      import('./sub-pages/profesor-detail/profesor-detail.module').then(
        (m) => m.ProfesorDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorsRoutingModule {}
