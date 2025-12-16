import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private urlApi: string = 'http://localhost:4000/api_urubamba_recomendacion/tags';

  constructor(private http: HttpClient) {}

  // GET: todos los tags
  public getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.urlApi);
  }

  // GET: tag por ID
  public getTagById(id: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.urlApi}/${id}`);
  }

  // POST: crear tag
  public postTag(data: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.urlApi, data);
  }

  // PUT: actualizar tag
  public updateTag(id: number, data: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.urlApi}/${id}`, data);
  }

  // DELETE: eliminar tag
  public deleteTag(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }
}
