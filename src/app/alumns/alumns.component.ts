import { Component } from '@angular/core';
import { IAlumn } from './models/alumn.model';
import { Observable } from 'rxjs';
import { AlumnService } from './services/alumn.service';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss'],
})
export class AlumnsComponent {
  public alumns: Observable<IAlumn[]>;

  constructor(private alumnService: AlumnService) {
    this.alumns = this.alumnService.getAlumns();
  }
}
