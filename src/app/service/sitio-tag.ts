import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitioTagss } from '../models/sitio-tag.model';

@Injectable({
  providedIn: 'root'
})
export class SitioTagService {

  private urlTag = 'http://localhost:4000/api_urubamba_recomendacion/sitio_tags';

  constructor(private http: HttpClient) {}

  // POST: crear relación sitio - tag
  public postSitioTag(dato: SitioTagss): Observable<SitioTagss> {
    return this.http.post<SitioTagss>(this.urlTag, dato);
  }

  // DELETE: eliminar relación sitio - tag
  public deleteTagBySitio(idSitio: number, idTag: number): Observable<void> {
    const url = `${this.urlTag}/${idSitio}/${idTag}`;
    return this.http.delete<void>(url);
  }

  // GET: tags por sitio
  public getTagsBySitio(idSitio: number): Observable<SitioTagss[]> {
    const url = `${this.urlTag}/sitio/${idSitio}`;
    return this.http.get<SitioTagss[]>(url);
  }

  // GET: sitios por tag
  public getSitiosByTag(idTag: number): Observable<SitioTagss[]> {
    const url = `${this.urlTag}/tag/${idTag}`;
    return this.http.get<SitioTagss[]>(url);
  }
}
