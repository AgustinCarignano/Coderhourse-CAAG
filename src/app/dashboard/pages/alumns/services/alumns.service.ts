import { Injectable } from '@angular/core';
import { APIAlumn } from '../models/alumns-api.model';
import { alumnsData } from 'src/assets/mockData/alumns/alumnsData';
import { Alumn } from '../models/alumn.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnsService {
  private data: APIAlumn[] = alumnsData;

  constructor() {}

  public getAlumns(): Observable<Alumn[]> {
    return of(this.data).pipe(
      map((data) =>
        data.map((a) => ({ ...a, birthdate: new Date(a.birthdate) }))
      )
    );
  }

  public getAlumById(id: number): Observable<Alumn> {
    const alumn = this.data.find((a) => a.id === id);
    if (!alumn) throw new Error('404');
    return of(new Alumn(alumn));
  }

  public addAlumn(alumn: Alumn): Observable<Alumn[]> {
    this.data = [
      ...this.data,
      {
        ...new APIAlumn(alumn),
        id: this.getAlumnId(),
      },
    ];
    return this.getAlumns();
  }

  public editAlumn(alumn: Alumn): Observable<Alumn[]> {
    this.data = this.data.map((a) =>
      a.id === alumn.id ? new APIAlumn(alumn) : a
    );
    return this.getAlumns();
  }

  public deleteAlumn(alumnId: number): Observable<Alumn[]> {
    this.data = this.data.filter((a) => a.id !== alumnId);
    return this.getAlumns();
  }

  private getAlumnId(): number {
    return this.data[this.data.length - 1].id + 1;
  }
}
