import { Component } from '@angular/core';
import { AlumnsService } from '../../services/alumns.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumn } from '../../models/alumn.model';

@Component({
  selector: 'app-alumn-detail',
  templateUrl: './alumn-detail.component.html',
  styleUrls: ['./alumn-detail.component.scss'],
})
export class AlumnDetailComponent {
  public alumn$!: Observable<Alumn>;

  constructor(
    private alumnService: AlumnsService,
    private router: ActivatedRoute
  ) {
    const id: string = this.router.snapshot.params['id'];
    if (id) this.alumn$ = this.alumnService.getAlumById(Number(id));
  }
}
