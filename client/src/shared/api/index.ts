import axios from 'axios';
import { IUser, IUserData } from './types';

class Api_instance {
  public httpClient;

  constructor() {
    const envURL = import.meta.env.VITE_API_URI as string;

    this.httpClient = axios.create({
      baseURL: envURL ?? 'http://localhost:6000/api',
    });

    this.httpClient.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
    );
  }

  public async getUsers(limit?: number): Promise<IUser[]> {
    return this.httpClient.get(
      'users',
      limit ? { params: { _limit: limit } } : {}
    );
  }

  public async addUser(userData: IUserData) {
    const response = await this.httpClient.post('users', userData);
    return response;
  }

  public async updateUser(id: IUser['id'], userData: IUserData) {
    const response = await this.httpClient.put(`users/${id}`, userData);
    return response;
  }

  public async deleteUser(id: IUser['id']) {
    const response = await this.httpClient.delete(`users/${id}`);
    return response;
  }
}

export const API = new Api_instance();
