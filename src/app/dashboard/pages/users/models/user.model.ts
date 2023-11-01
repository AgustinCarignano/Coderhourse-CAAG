import { UserRol } from '../enums/user-rol.enum';
import { IAPIUser } from './user-api.model';

export interface IUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  rol: UserRol;
}

export class User implements IUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  rol: UserRol;

  constructor(data: IAPIUser) {
    this.id = data.id;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.rol = data.rol;
  }
}
