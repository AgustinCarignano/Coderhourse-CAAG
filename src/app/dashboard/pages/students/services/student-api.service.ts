import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { Student } from '../models/student.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService extends HttpService<Student> {
  constructor(http: HttpClient, auth: AuthService) {
    super(http, environment.baseUrl + '/students', auth);
  }
}
