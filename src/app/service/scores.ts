import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private urlApi = 'http://localhost:4000/api_urubamba_recomendacion/scores';

  constructor(private http: HttpClient) {}

  // GET: todos los scores
  public getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.urlApi);
  }

  // GET: scores por usuario
  public getScoresByUsuario(idUsuario: number): Observable<Score[]> {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.get<Score[]>(url);
  }

  // GET: score por sitio turístico
  public getScoreBySitio(idSitio: number): Observable<Score> {
    const url = `${this.urlApi}/sitio/${idSitio}`;
    return this.http.get<Score>(url);
  }

  // POST: crear score
  public postScore(dato: Score): Observable<Score> {
    return this.http.post<Score>(this.urlApi, dato);
  }

  // DELETE: eliminar score
  public deleteScore(id: number): Observable<void> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<void>(url);
  }
}
