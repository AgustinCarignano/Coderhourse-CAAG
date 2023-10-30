import { Alumn } from './alumn.model';

export interface IAPIAlumn {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;
  dni: string;
  email: string;
  phoneNumber: string;
  country: string;
  province: string;
  city: string;
}

export class APIAlumn implements IAPIAlumn {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;
  dni: string;
  email: string;
  phoneNumber: string;
  country: string;
  province: string;
  city: string;

  constructor(data: Alumn) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.birthdate = data.birthdate.toISOString();
    this.dni = data.dni;
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
    this.country = data.country;
    this.province = data.province;
    this.city = data.city;
  }
}
