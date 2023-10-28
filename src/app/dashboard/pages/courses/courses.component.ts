import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { Course } from './models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  public courses$: Observable<Course[]>;

  constructor(private courseService: CoursesService) {
    this.courses$ = this.courseService.getCourses();
  }
  public newCourse(): void {}
}
