import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ReseniasService {

  private apiUrl = 'http://api_urubamba_recomendacion/resenias';

  constructor(private http: HttpClient) { }

  public getResenias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public postResenia(dato: any): Observable<any> {
    return this.http.post(this.apiUrl, dato);
  }
  public deleteResenia(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  public updateResenia(id: number, dato: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, dato);
  }
  public getReseniasByUsuario(idUsuario: number): Observable<any> {
    const url = `${this.apiUrl}/usuario/${idUsuario}`;
    return this.http.get(url);
  }
  public getReseniasByLugar(idLugar: number): Observable<any> {
    const url = `${this.apiUrl}/lugar/${idLugar}`;
    return this.http.get(url);
  }
}
