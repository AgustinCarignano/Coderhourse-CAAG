import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { ProfesorsApiService } from '../../services/profesors-api.service';

@Component({
  selector: 'app-profesor-detail',
  templateUrl: './profesor-detail.component.html',
})
export class ProfesorDetailComponent {
  public profesor$?: Observable<Profesor>;
  public pagetitle = 'Profesor details';

  constructor(
    private router: ActivatedRoute,
    private profesorApiService: ProfesorsApiService
  ) {
    const id: string = this.router.snapshot.params['id'];
    if (id) this.profesor$ = this.profesorApiService.getOneProfesor(Number(id));
  }
}
