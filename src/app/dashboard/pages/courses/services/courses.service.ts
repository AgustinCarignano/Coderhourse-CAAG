import { Injectable } from '@angular/core';
import { APICourse } from '../models/course-api.model';
import { coursesData } from 'src/assets/mockData/alumns/coursesData';
import { Observable, map, of } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private data: APICourse[] = coursesData;

  constructor() {}

  public getCourses(): Observable<Course[]> {
    return of(this.data).pipe(map((data) => data.map((c) => new Course(c))));
  }
}
