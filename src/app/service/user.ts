import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:4000/api_urubamba_recomendacion/users';

  constructor(private http: HttpClient) {}

  // POST: login
  public login(data: { email: string; contrasena: string }): Observable<{ token: string; user: Usuario }> {
    return this.http.post<{ token: string; user: Usuario }>(`${this.url}/login`, data);
  }

  // POST: registrar usuario
  public register(data: Omit<Usuario, 'id'>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/usuarios`, data);
  }

  // GET: usuario por ID
  public getUserById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/usuarios/${id}`);
  }

  // PUT: actualizar usuario
  public updateUser(id: number, data: Partial<Usuario>): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/usuarios/${id}`, data);
  }

  // DELETE: eliminar usuario
  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/usuarios/${id}`);
  }
}
