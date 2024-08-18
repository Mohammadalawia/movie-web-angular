import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class DirectorService{
  private apiUrl = 'http://localhost:8080/api/v0/directors';

  constructor(private http: HttpClient) { }

  getDirectors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}`, data, { headers });
  }

  getDirectorById(id: number): Observable<Director> {
    return this.http.get<Director>(this.apiUrl+`/${id}`);
  }
}
