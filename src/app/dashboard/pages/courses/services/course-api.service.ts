import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Course } from '../models';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class CourseApiService extends HttpService<Course> {
  constructor(http: HttpClient, auth: AuthService) {
    super(http, environment.baseUrl + '/courses', auth);
  }
}
