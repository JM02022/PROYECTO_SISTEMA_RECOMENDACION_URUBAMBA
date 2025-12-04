import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Categoria {
  private urlApi = 'http://api_urubamba_recomendacion/categorias';

  constructor(private http: HttpClient) { }
  public getCategorias() {
    return this.http.get(this.urlApi);
  }
  public postCategoria(dato: any) {
    return this.http.post(this.urlApi, dato);
  }
  public deleteCategoria(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  } 
  public updateCategoria(id: number, dato: any) {
    const url = `${this.urlApi}/${id}`;
    return this.http.put(url, dato);
  }
  
}
