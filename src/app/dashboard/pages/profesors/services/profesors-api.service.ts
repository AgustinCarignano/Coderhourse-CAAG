import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { APIProfesor, Profesor } from '../models';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class ProfesorsApiService extends HttpService<APIProfesor> {
  constructor(http: HttpClient, auth: AuthService) {
    super(http, environment.baseUrl + '/profesors', auth);
  }

  public getProfesors(): Observable<Profesor[]> {
    return this.getAll().pipe(map(this.adaptFromApi));
  }

  public getOneProfesor(profesorId: number): Observable<Profesor> {
    return this.getOne(profesorId).pipe(
      map(this.adaptFromApi),
      map((p) => p[0])
    );
  }

  public createProfesor(profesor: Profesor): Observable<Profesor[]> {
    return this.create(new APIProfesor(profesor)).pipe(map(this.adaptFromApi));
  }

  public updateProfesor(profesor: Profesor): Observable<Profesor[]> {
    return this.update(profesor.id, new APIProfesor(profesor)).pipe(
      map(this.adaptFromApi)
    );
  }

  public deleteProfesor(profesorId: number): Observable<Profesor[]> {
    return this.delete(profesorId).pipe(map(this.adaptFromApi));
  }

  private adaptFromApi(data: APIProfesor | APIProfesor[]): Profesor[] {
    if (data instanceof Array) {
      return data.map((p) => new Profesor(p));
    } else {
      return [new Profesor(data)];
    }
  }
}
