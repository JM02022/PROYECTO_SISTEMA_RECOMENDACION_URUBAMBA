import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitiosTuristicos {
  private urlApi: string = 'http://api_urubamba_recomendacion/sitios_turisticos';
  constructor(private http:HttpClient) { }
  public getSitiosTuristicos(){
    return this.http.get(this.urlApi);
  }
  public getSitioTuristicoById(id:any){
    return this.http.get(`${this.urlApi}/${id}`);
  }
  public postSitioTuristico(data:any){
    return this.http.post(this.urlApi, data);
  }
  public updateSitioTuristico(id:any, data:any){
    return this.http.put(`${this.urlApi}/${id}`, data);
  }
  public deleteSitioTuristico(id:any){
    return this.http.delete(`${this.urlApi}/${id}`);
  }

}
