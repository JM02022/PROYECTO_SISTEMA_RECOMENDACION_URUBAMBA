import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private url: string = 'http://api_urubamba_recomendacion/users';
  constructor(private http: HttpClient) {  }
  public login(data:any){
    return this.http.post(`${this.url}/login`, data);
  }
  public register(data:any){
    return this.http.post(`${this.url}/usuarios`, data);
  }
  public getUserById(id:any){
    return this.http.get(`${this.url}/usuarios/${id}`);
  }
  public updateUser(id:any, data:any){
    return this.http.put(`${this.url}/usuarios/${id}`, data);
  }
  public deleteUser(id:any){
    return this.http.delete(`${this.url}/usuarios/${id}`);
  }
}
