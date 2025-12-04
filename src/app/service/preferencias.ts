import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Preferencias {
  private urlApi = 'http://api_urubamba_recomendacion/preferencias';
  constructor(private http: HttpClient) { }
  public getPreferencias() {
    return this.http.get(this.urlApi);
  }
  public getPreferenciasByUsuario(idUsuario: number) {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.get(url);
  }
  public getPreferenciaByUsuarioYCategoria(idUsuario: number, idCategoria: number) {
    const url = `${this.urlApi}/usuario/${idUsuario}/categoria/${idCategoria}`;
    return this.http.get(url);
  }
  public postPreferencia(dato: any) {
    return this.http.post(this.urlApi, dato);
  }
  public updatePreferencia(id: number, dato: any) {
    const url = `${this.urlApi}/${id}`;
    return this.http.put(url, dato);
  }
  public deletePreferencia(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
  public deletePreferenciasByUsuario(idUsuario: number) {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.delete(url);
  }
}
