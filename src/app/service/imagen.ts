import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Imagen {
  private urlApi = 'http://api_urubamba_recomendacion/imagenes';

  constructor(private http: HttpClient) { }
  public getImagenes() {
    return this.http.get(this.urlApi);
  }
  public getImagenesById(IdImagen: number) {
    const url = `${this.urlApi}/imagen/${IdImagen}`;
    return this.http.get(url);
  }
  public getImagenesByLugar(idLugar: number) {
    const url = `${this.urlApi}/sitio/${idLugar}`;
    return this.http.get(url);
  }
  public postImagen(dato: any) {
    return this.http.post(this.urlApi, dato);
  }
  public deleteImagen(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
