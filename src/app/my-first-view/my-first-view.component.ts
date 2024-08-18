import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../components/MovieCard/movieCard.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-my-first-view',
  standalone: true,
  imports: [NgFor,MovieCard,FormsModule,ModalComponent],
  templateUrl: './my-first-view.component.html',
  styleUrls: ['./my-first-view.component.css']
})
export class MyFirstViewComponent implements OnInit {
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
  constructor( private movieService:MovieService){}
  ngOnInit(): void {
      this.getMovies();
  }
  public postMovie(movieForm: any) {

    if (movieForm.valid) {

      // Post the movie data
      this.movieService.postData(this.movie).subscribe({
        next: (res) => {console.log('Movie saved:', res);
          this.getMovies();
        },
        error: (err) => console.error('Error:', err)

      });

      // Reset the form
      movieForm.resetForm();
      this.getMovies();

    } else {
      console.error('Form is invalid');
    }
  }
  public getMovies(){
    this.movieService.getMovies()
  }

}
