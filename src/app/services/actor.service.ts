import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = 'http://localhost:8080/api/v0/actors';

  constructor(private http: HttpClient) { }

  getActors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}`, data, { headers });
  }

  getActorById(id: number): Observable<Actor> {
    return this.http.get<Actor>(this.apiUrl+`/${id}`);
  }



}
