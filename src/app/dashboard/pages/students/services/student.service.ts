import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { StudentApiService } from './student-api.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private studentsApiService: StudentApiService) {}

  public getStudentsQuantity(): Observable<number> {
    return this.studentsApiService.getStudents().pipe(map((s) => s.length));
  }
}
