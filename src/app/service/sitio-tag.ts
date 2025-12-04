import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitioTag {
  private urlTag = 'http://api_urubamba_recomendacion/sitio_tags';
  constructor(private http:HttpClient) {  }
  public postSitioTag(dato:any){
    return this.http.post(this.urlTag,dato);
  }
  public deleteTagBySitio(idSitio:number,idTag:number){
    const url = `${this.urlTag}/${idSitio}/${idTag}`;
    return this.http.delete(url);
  }
  public getTagsBySitio(idSitio:number){
    const url = `${this.urlTag}/sitio/${idSitio}`;
    return this.http.get(url);
  }
  public getSitiosByTag(idTag:number){
    const url = `${this.urlTag}/tag/${idTag}`;
    return this.http.get(url);
  }
}
