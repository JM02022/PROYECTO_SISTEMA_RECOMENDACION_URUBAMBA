import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialInteracciones {
  private urlApi = 'http://api_urubamba_recomendacion/historial-interacciones';

  constructor(private http: HttpClient) { }
  public getHistorialInteracciones() {
    return this.http.get(this.urlApi);
  }
  public getHistorialById(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.get(url);
  }
  public getHistorialByUsuario(idUsuario: number) {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.get(url);
  }
  public getHistorialByLugar(idLugar: number) {
    const url = `${this.urlApi}/sitio/${idLugar}`;
    return this.http.get(url);
  }
  public postHistorialInteraccion(dato: any) {
    return this.http.post(this.urlApi, dato);
  }
  public deleteHistorialInteraccion(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
