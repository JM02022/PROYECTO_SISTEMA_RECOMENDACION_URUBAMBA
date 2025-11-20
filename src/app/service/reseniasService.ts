import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ReseniasService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/users';

  constructor(private http: HttpClient) { }

  public getDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public postDato(dato: any): Observable<any> {
    return this.http.post(this.apiUrl, dato);
  }
}
