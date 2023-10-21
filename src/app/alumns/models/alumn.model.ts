export interface APIAlumn {
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

export interface IAlumn {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  dni: string;
  email: string;
  phoneNumber: string;
  country: string;
  province: string;
  city: string;
}
