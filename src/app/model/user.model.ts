export interface IUserPersonal {
  firstName: string;
  lastName: string;
  birthDate: Date;
  dni: string;
  email: string;
  phoneNumber: string;
  country: string;
  province: string;
  city: string;
}

export interface ICourse {
  course: string;
  comission: string;
  startDate: Date;
  endDate: Date;
  scholarShip: boolean;
}

export interface IUser {
  personalInformation: IUserPersonal;
  courses: ICourse[];
}
