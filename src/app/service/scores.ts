import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Scores {
  private urlApi = 'http://api_urubamba_recomendacion/scores';
  constructor(private http:HttpClient) { }
  public getScores() {
    return this.http.get(this.urlApi);
  }
  public getScoresByUsuario(idUsuario: number) {
    const url = `${this.urlApi}/usuario/${idUsuario}`;
    return this.http.get(url);
  }
  public getScoreBySitio(IdSitio: number){
    const url = `${this.urlApi}/sitio/${IdSitio}`;
    return this.http.get(url);
  }
  public postScore(dato: any) {
    return this.http.post(this.urlApi, dato);
  }
  public deleteScore(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
