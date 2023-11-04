import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CourseApiService } from './course-api.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private courseApiService: CourseApiService) {}

  public getCoursesQuantity(): Observable<number> {
    return this.courseApiService.getCourses().pipe(map((c) => c.length));
  }
}
