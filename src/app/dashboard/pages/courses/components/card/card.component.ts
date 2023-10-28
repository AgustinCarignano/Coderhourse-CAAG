import { Component, Input } from '@angular/core';
import { ICourse } from '../../models/course.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public course!: ICourse;
}
