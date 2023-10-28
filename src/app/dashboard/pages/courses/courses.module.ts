import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoursesComponent, CardComponent],
  imports: [CommonModule, SharedModule, CoursesRoutingModule, MatCardModule],
})
export class CoursesModule {}
