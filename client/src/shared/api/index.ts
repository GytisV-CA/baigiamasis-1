import axios from 'axios';
import { IUser } from './types';

class Api_instance {
  public httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:5000/api',
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
}

export const API = new Api_instance();
