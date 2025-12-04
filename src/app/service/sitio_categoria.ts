import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitioCategoria {
  private urlApi = 'http://api_urubamba_recomendacion/sitio_categorias';
  constructor(private http:HttpClient) {  }
  public getSitioByCategoria(idCategoria: number) {
    const url = `${this.urlApi}/categoria/${idCategoria}`;
    return this.http.get(url);
  }
  public getCategoriaBySitio(idSitio: number) {
    const url = `${this.urlApi}/sitio/${idSitio}`;
    return this.http.get(url);
  }
  public deleteCategoriaBySitio(idSitio: number, idCategoria: number) {
    const url = `${this.urlApi}/${idSitio}/${idCategoria}`;
    return this.http.delete(url);
  }
  public postSitioCategoria(dato: any) {
    return this.http.post(this.urlApi, dato);
  }
}
