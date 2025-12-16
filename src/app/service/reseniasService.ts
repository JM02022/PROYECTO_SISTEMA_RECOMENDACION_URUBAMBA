import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resenia } from '../models/resenia.model';

@Injectable({
  providedIn: 'root'
})
export class ReseniasService {

  private apiUrl = 'http://localhost:4000/api_urubamba_recomendacion/resenias';

  constructor(private http: HttpClient) {}

  // GET: todas las reseñas
  public getResenias(): Observable<Resenia[]> {
    return this.http.get<Resenia[]>(this.apiUrl);
  }

  // GET: reseña por ID
  public getReseniaById(id: number): Observable<Resenia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Resenia>(url);
  }

  // POST: crear reseña
  public postResenia(dato: Resenia): Observable<Resenia> {
    return this.http.post<Resenia>(this.apiUrl, dato);
  }

  // DELETE: eliminar reseña
  public deleteResenia(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // PUT: actualizar reseña
  public updateResenia(id: number, dato: Resenia): Observable<Resenia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Resenia>(url, dato);
  }

  // GET: reseñas por usuario
  public getReseniasByUsuario(idUsuario: number): Observable<Resenia[]> {
    const url = `${this.apiUrl}/usuario/${idUsuario}`;
    return this.http.get<Resenia[]>(url);
  }

  // GET: reseñas por sitio turístico
  public getReseniasByLugar(idSitio: number): Observable<Resenia[]> {
    const url = `${this.apiUrl}/sitio/${idSitio}`;
    return this.http.get<Resenia[]>(url);
  }
}
