import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://dummyapi.io/data/v1/user';
  private headers = new HttpHeaders({
    'app-id': '64cbeddd253549dc8b990b71',
  });

  resourceUrl: string = env.dummyapi.url;

  constructor(private http: HttpClient) {}

  // Listar todos os usuários
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }

  // Obter detalhes de um usuário pelo ID
  getUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url, { headers: this.headers });
  }

  // Criar um novo usuário
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData, { headers: this.headers });
  }

  // Atualizar os dados de um usuário
  updateUser(userId: string, userData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put(url, userData, { headers: this.headers });
  }

  // Excluir um usuário
  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url, { headers: this.headers });
  }
}
