import { Injectable } from '@angular/core';
import { APIAlumn, IAlumn } from '../models/alumn.model';
import { alumnsData } from 'src/assets/data/alumnsData';
import { Observable, of, map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnService {
  private data: APIAlumn[] = alumnsData;
  private dataDelay: number = 500;

  constructor() {}

  public getAlumns(sliceOption: 1 | 2): Observable<IAlumn[]> {
    return of(this.data).pipe(
      map((data) =>
        data
          .map((a) => ({
            ...a,
            birthdate: new Date(a.birthdate),
          }))
          .slice((sliceOption - 1) * 10, sliceOption * 10)
      ),
      delay(this.dataDelay)
    );
  }

  public getAlumnsPromise(): Promise<IAlumn[]> {
    return new Promise((resolve) => {
      const formateData = this.data
        .map((a) => ({
          ...a,
          birthdate: new Date(a.birthdate),
        }))
        .slice(20, 30);
      setTimeout(() => {
        resolve(formateData);
      }, this.dataDelay);
    });
  }
}
