import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitioCategoriass } from '../models/sitio-categoria.model';

@Injectable({
  providedIn: 'root'
})
export class SitioCategoriaService {

  private urlApi = 'http://localhost:4000/api_urubamba_recomendacion/sitio_categorias';

  constructor(private http: HttpClient) {}

  // GET: sitios por categoría
  public getSitioByCategoria(idCategoria: number): Observable<SitioCategoriass[]> {
    const url = `${this.urlApi}/categoria/${idCategoria}`;
    return this.http.get<SitioCategoriass[]>(url);
  }

  // GET: categorías por sitio
  public getCategoriaBySitio(idSitio: number): Observable<SitioCategoriass[]> {
    const url = `${this.urlApi}/sitio/${idSitio}`;
    return this.http.get<SitioCategoriass[]>(url);
  }

  // DELETE: eliminar relación sitio - categoría
  public deleteCategoriaBySitio(
    idSitio: number,
    idCategoria: number
  ): Observable<void> {
    const url = `${this.urlApi}/${idSitio}/${idCategoria}`;
    return this.http.delete<void>(url);
  }

  // POST: crear relación sitio - categoría
  public postSitioCategoria(
    dato: SitioCategoriass
  ): Observable<SitioCategoriass> {
    return this.http.post<SitioCategoriass>(this.urlApi, dato);
  }
}
