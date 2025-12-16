import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Analyticss } from '../models/analytics.model';
@Injectable({
  providedIn: 'root'
})
export class Analytics {
  private apiUrl = 'http://localhost:4000/api_urubamba_analytics/analytics';
  constructor(private http:HttpClient) { }

  
  // GET: obtener todas las analytics
  public getAnalytics(): Observable<Analyticss[]> {
    return this.http.get<Analyticss[]>(this.apiUrl);
  }

  // POST: crear una nueva analytics
  public postAnalytics(dato: Analyticss): Observable<Analyticss> {
    return this.http.post<Analyticss>(this.apiUrl, dato);
  }

  // DELETE: eliminar analytics por id
  public deleteAnalytics(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // PUT: actualizar analytics por id
  public updateAnalytics(id: number, dato: Analyticss): Observable<Analyticss> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Analyticss>(url, dato);
  }
}
