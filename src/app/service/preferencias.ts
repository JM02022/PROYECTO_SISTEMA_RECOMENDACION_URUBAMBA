import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreferenciaUsuario } from '../models/preferencia-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {

  private urlApi = 'http://localhost:4000/api_urubamba_recomendacion/preferencias';

  constructor(private http: HttpClient) {}

  // GET: todas las preferencias
  public getPreferencias(): Observable<PreferenciaUsuario[]> {
    return this.http.get<PreferenciaUsuario[]>(this.urlApi);
  }

  // GET: preferencias por usuario
  public getPreferenciasByUsuario(idUsuario: number): Observable<PreferenciaUsuario[]> {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.get<PreferenciaUsuario[]>(url);
  }

  // GET: preferencia por usuario y categoría
  public getPreferenciaByUsuarioYCategoria(
    idUsuario: number,
    idCategoria: number
  ): Observable<PreferenciaUsuario> {
    const url = `${this.urlApi}/usuario/${idUsuario}/categoria/${idCategoria}`;
    return this.http.get<PreferenciaUsuario>(url);
  }

  // POST: crear preferencia
  public postPreferencia(dato: PreferenciaUsuario): Observable<PreferenciaUsuario> {
    return this.http.post<PreferenciaUsuario>(this.urlApi, dato);
  }

  // PUT: actualizar preferencia
  public updatePreferencia(
    id: number,
    dato: PreferenciaUsuario
  ): Observable<PreferenciaUsuario> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<PreferenciaUsuario>(url, dato);
  }

  // DELETE: eliminar preferencia por ID
  public deletePreferencia(id: number): Observable<void> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<void>(url);
  }

  // DELETE: eliminar todas las preferencias de un usuario
  public deletePreferenciasByUsuario(idUsuario: number): Observable<void> {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.delete<void>(url);
  }
}
