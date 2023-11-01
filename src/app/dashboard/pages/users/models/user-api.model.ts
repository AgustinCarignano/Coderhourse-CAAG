import { UserRol } from '../enums/user-rol.enum';
import { IUser } from './user.model';

export interface IAPIUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  rol: UserRol;
}

export class APIUser implements IAPIUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  rol: UserRol;

  constructor(data: IUser) {
    this.id = data.id;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.rol = data.rol;
  }
}
