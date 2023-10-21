import { Injectable } from '@angular/core';
import { APIAlumn, IAlumn } from '../models/alumn.model';
import { alumnsData } from 'src/assets/data/alumnsData';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnService {
  private data: APIAlumn[] = alumnsData;

  constructor() {}

  public getAlumns(): Observable<IAlumn[]> {
    return of(this.data).pipe(
      map((data) =>
        data.map((a) => ({
          ...a,
          birthdate: new Date(a.birthdate),
        }))
      )
    );
  }
}
