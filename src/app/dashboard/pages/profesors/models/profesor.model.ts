import { Person } from 'src/app/dashboard/commons/person/models/person.model';
import { APIProfesor } from './profesor-api.model';

export class Profesor implements Person {
  birthdate: Date;
  id: number;
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  phoneNumber: string;
  country: string;
  province: string;
  city: string;

  constructor(data: APIProfesor) {
    this.birthdate = new Date(data.birthdate);
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.dni = data.dni;
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
    this.country = data.country;
    this.province = data.province;
    this.city = data.city;
  }
}
