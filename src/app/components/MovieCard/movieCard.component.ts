import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MovieService } from '../../services/movie.service';
@Component({
  selector: 'movieCard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movieCard.component.html',
  styleUrls: ['./movieCard.component.css']
})
export class MovieCard implements OnInit {
  movies : any[] = [];
  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.again();
  }
  public again(){
    this.movieService.getMovies().subscribe({
      next : (resp)=>{this.movies=resp},
      error: (error) => {console.log(error)}
      })
  }

}
