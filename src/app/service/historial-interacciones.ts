import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorialInteraccion } from '../models/historial-interaccion.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialInteraccionesService {

  private urlApi = 'http://localhost:4000/api_urubamba_recomendacion/historial_interacciones';

  constructor(private http: HttpClient) {}

  // GET: todos los historiales
  public getHistorialInteracciones(): Observable<HistorialInteraccion[]> {
    return this.http.get<HistorialInteraccion[]>(this.urlApi);
  }

  // GET: historial por ID
  public getHistorialById(id: number): Observable<HistorialInteraccion> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<HistorialInteraccion>(url);
  }

  // GET: historial por usuario
  public getHistorialByUsuario(idUsuario: number): Observable<HistorialInteraccion[]> {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.get<HistorialInteraccion[]>(url);
  }

  // GET: historial por sitio turístico
  public getHistorialByLugar(idLugar: number): Observable<HistorialInteraccion[]> {
    const url = `${this.urlApi}/sitio/${idLugar}`;
    return this.http.get<HistorialInteraccion[]>(url);
  }

  // POST: crear historial de interacción
  public postHistorialInteraccion(
    dato: HistorialInteraccion
  ): Observable<HistorialInteraccion> {
    return this.http.post<HistorialInteraccion>(this.urlApi, dato);
  }

  // DELETE: eliminar historial
  public deleteHistorialInteraccion(id: number): Observable<void> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<void>(url);
  }
}
