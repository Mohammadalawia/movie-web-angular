import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieCard } from '../MovieCard/movieCard.component';
import { CommonModule, NgFor } from '@angular/common';
import { ModalComponent } from '../../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'about',
  standalone: true,
  imports: [HttpClientModule,MovieCard, NgFor,ModalComponent,CommonModule,FormsModule],
  templateUrl: './about.component.html',
})
export class About implements OnInit {
  movies : any[] = [];
  movie: Movie = {
    id: 0,
    title: '',
    genre: [],
    duration: '',
    grossIncome: '',
    director_id: 0,
    studio_id: 0
  };
  genreInput: string = '';
  constructor(private http:HttpClient){}

  ngOnInit(): void {
      this.fetchDetails();
  }
public fetchDetails(){
this.http.get('http://localhost:8080/api/v0/movies').subscribe(
  (resp:any) => {
    this.movies=resp;
  }
)
}
}
