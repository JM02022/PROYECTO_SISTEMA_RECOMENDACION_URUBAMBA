import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagenss } from '../models/imagen.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private urlApi = 'http://localhost:4000/api_urubamba_recomendacion/imagenes';

  constructor(private http: HttpClient) {}

  // GET: todas las imágenes
  public getImagenes(): Observable<Imagenss[]> {
    return this.http.get<Imagenss[]>(this.urlApi);
  }

  // GET: imagen por ID
  public getImagenesById(idImagen: number): Observable<Imagenss> {
    const url = `${this.urlApi}/${idImagen}`;
    return this.http.get<Imagenss>(url);
  }

  // GET: imágenes por sitio turístico
  public getImagenesByLugar(idLugar: number): Observable<Imagenss[]> {
    const url = `${this.urlApi}/sitio/${idLugar}`;
    return this.http.get<Imagenss[]>(url);
  }

  // POST: crear imagen
  public postImagen(dato: Imagenss): Observable<Imagenss> {
    return this.http.post<Imagenss>(this.urlApi, dato);
  }

  // PUT: actualizar imagen
  public updateImagen(id: number, dato: Imagenss): Observable<Imagenss> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<Imagenss>(url, dato);
  }

  // DELETE: eliminar imagen
  public deleteImagen(id: number): Observable<void> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<void>(url);
  }
}
