import { Component } from '@angular/core';
import { alumnosData } from './data/alumnos.data';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

  public alumnos = alumnosData
  
  private fecha =new Date().getTime()-(3600*1000*24*365.25*18)


  public getClass(fechaNacimiento:number) {

    return fechaNacimiento>this.fecha?"menor":"mayor"
  }
}
