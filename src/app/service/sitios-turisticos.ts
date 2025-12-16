import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitioTuristico } from '../models/sitio-turistico.model';

@Injectable({
  providedIn: 'root'
})
export class SitiosTuristicosService {

  private urlApi: string = 'http://localhost:4000/api_urubamba_recomendacion/sitios_turisticos';

  constructor(private http: HttpClient) {}

  // GET: todos los sitios turísticos
  public getSitiosTuristicos(): Observable<SitioTuristico[]> {
    return this.http.get<SitioTuristico[]>(this.urlApi);
  }

  // GET: sitio turístico por ID
  public getSitioTuristicoById(id: number): Observable<SitioTuristico> {
    return this.http.get<SitioTuristico>(`${this.urlApi}/${id}`);
  }

  // POST: crear sitio turístico
  public postSitioTuristico(data: SitioTuristico): Observable<SitioTuristico> {
    return this.http.post<SitioTuristico>(this.urlApi, data);
  }

  // PUT: actualizar sitio turístico
  public updateSitioTuristico(id: number, data: SitioTuristico): Observable<SitioTuristico> {
    return this.http.put<SitioTuristico>(`${this.urlApi}/${id}`, data);
  }

  // DELETE: eliminar sitio turístico
  public deleteSitioTuristico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }

}
