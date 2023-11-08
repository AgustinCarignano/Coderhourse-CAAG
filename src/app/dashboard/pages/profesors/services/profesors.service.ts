import { Injectable } from '@angular/core';
import { ProfesorsApiService } from './profesors-api.service';
import { Observable, map } from 'rxjs';
import { BasicEntityService } from 'src/app/core/models/BasicEntityService.model';

@Injectable({
  providedIn: 'root',
})
export class ProfesorsService implements BasicEntityService {
  constructor(private profesorApiService: ProfesorsApiService) {}

  public getQuantity(): Observable<number> {
    return this.profesorApiService.getProfesors().pipe(map((p) => p.length));
  }
}
