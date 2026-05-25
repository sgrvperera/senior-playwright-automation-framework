import { APIRequestContext } from '@playwright/test';
import { config } from '../config/environment';
import { Logger } from '../utils/logger';

/**
 * API Client for JSONPlaceholder API
 * 
 * JSONPlaceholder is a free, stable public API for testing and prototyping.
 * No authentication required.
 * 
 * @see https://jsonplaceholder.typicode.com for API documentation
 */
export class ApiClient {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = config.api.baseUrl;
  }

  async getUsers(page: number = 1) {
    Logger.info(`GET /users`);
    const response = await this.request.get(`${this.baseUrl}/users`);
    return response;
  }

  async getUserById(id: number) {
    Logger.info(`GET /users/${id}`);
    const response = await this.request.get(`${this.baseUrl}/users/${id}`);
    return response;
  }

  async createUser(data: { name: string; job: string }) {
    Logger.info('POST /users', data);
    const response = await this.request.post(`${this.baseUrl}/users`, {
      data,
    });
    return response;
  }

  async updateUser(id: number, data: { name: string; job: string }) {
    Logger.info(`PUT /users/${id}`, data);
    const response = await this.request.put(`${this.baseUrl}/users/${id}`, {
      data,
    });
    return response;
  }

  async deleteUser(id: number) {
    Logger.info(`DELETE /users/${id}`);
    const response = await this.request.delete(`${this.baseUrl}/users/${id}`);
    return response;
  }

  // JSONPlaceholder doesn't have auth endpoints, so these are mock implementations
  // that demonstrate the pattern for when you need to test authentication flows
  async register(data: { email: string; password?: string }) {
    Logger.info('POST /users (register)', { email: data.email });
    // JSONPlaceholder treats this as a regular user creation
    const response = await this.request.post(`${this.baseUrl}/users`, {
      data: { email: data.email, password: data.password },
    });
    return response;
  }

  async login(data: { email: string; password: string }) {
    Logger.info('POST /users (login)', { email: data.email });
    // JSONPlaceholder treats this as a regular user creation
    const response = await this.request.post(`${this.baseUrl}/users`, {
      data: { email: data.email, password: data.password },
    });
    return response;
  }
}
