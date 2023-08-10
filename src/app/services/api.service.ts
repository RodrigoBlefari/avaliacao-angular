import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../core/models/user/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://dummyapi.io/data/v1';
  private apiKey = '64cbeddd253549dc8b990b71'; // Replace with your API key

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set('app-id', this.apiKey);
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }

  getUser(id: string): Observable<any> {
    const headers = new HttpHeaders().set('app-id', this.apiKey);
    return this.http.get(`${this.apiUrl}/user/${id}`, { headers });
  }

  createUser(user: User): Observable<any> {
    const headers = new HttpHeaders().set('app-id', this.apiKey);
    return this.http.post(`${this.apiUrl}/user/create`, user, { headers });
  }

  updateUser(id: string, updatedUserData: any): Observable<any> {
    const headers = new HttpHeaders().set('app-id', this.apiKey);
    return this.http.put(`${this.apiUrl}/user/${id}`, updatedUserData, {
      headers,
    });
  }

  deleteUser(id: string): Observable<any> {
    const headers = new HttpHeaders().set('app-id', this.apiKey);
    return this.http.delete(`${this.apiUrl}/user/${id}`, { headers });
  }
}
