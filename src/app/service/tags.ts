import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tags {
  private urlApi: string = 'http://api_urubamba_recomendacion/tags';
  constructor(private http:HttpClient) {  }
  public getTags(){
    return this.http.get(this.urlApi);
  }
  public getTagById(id:any){
    return this.http.get(`${this.urlApi}/${id}`);
  }
  public postTag(data:any){
    return this.http.post(this.urlApi, data);
  }
  public updateTag(id:any, data:any){
    return this.http.put(`${this.urlApi}/${id}`, data);
  }
  public deleteTag(id:any){
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
