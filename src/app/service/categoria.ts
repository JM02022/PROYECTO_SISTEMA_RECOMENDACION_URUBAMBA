import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoriass } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlApi = 'http://localhost:4000/api_urubamba_recomendacion/categorias';

  constructor(private http: HttpClient) {}

  // GET: obtener todas las categorías
  public getCategorias(): Observable<Categoriass[]> {
    return this.http.get<Categoriass[]>(this.urlApi);
  }

  // GET: obtener categoría por ID
  public getCategoriaById(idCategoria: number): Observable<Categoriass> {
    const url = `${this.urlApi}/${idCategoria}`;
    return this.http.get<Categoriass>(url);
  }

  // POST: crear categoría
  public postCategoria(dato: Categoriass): Observable<Categoriass> {
    return this.http.post<Categoriass>(this.urlApi, dato);
  }

  // DELETE: eliminar categoría
  public deleteCategoria(id: number): Observable<void> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<void>(url);
  }

  // PUT: actualizar categoría
  public updateCategoria(id: number, dato: Categoriass): Observable<Categoriass> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<Categoriass>(url, dato);
  }
}
