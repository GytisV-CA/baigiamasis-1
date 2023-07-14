export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
}

export type IUserData = Omit<IUser, 'id'>;
