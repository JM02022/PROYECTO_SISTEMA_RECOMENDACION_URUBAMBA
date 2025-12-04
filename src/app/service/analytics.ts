import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Analytics {
  private apiUrl = 'http://api_urubamba_analytics/analytics';
  constructor(private http:HttpClient) { }
  public getAnalytics(){
    return this.http.get(this.apiUrl);
  }
  public postAnalytics(dato:any){
    return this.http.post(this.apiUrl, dato);
  }
  public deleteAnalytics(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  public updateAnalytics(id:number, dato:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, dato);
  }
}
