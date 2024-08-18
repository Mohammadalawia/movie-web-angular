import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';  // Import FormsModule and NgForm
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [FormsModule,CommonModule],  // Include FormsModule here
  standalone: true
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  movie: Movie = {
    id: 0,
    title: '',
    genre: [],  // Changed from [''] to []
    duration: '',
    grossIncome: '',
    director_id: 1,
    studio_id: 1
  };
  genreInput: string = '';

  constructor(private movieService: MovieService) {}

  postMovie(form: NgForm) {
    if (form.valid) {
      this.movie.genre = this.genreInput.split(',').map(g => g.trim());
      this.movieService.postData(this.movie).subscribe({
        next: (res) => {
          console.log(res);
          this.closeModal();
        },
        error: (err) => console.error(err)
      });
    } else {
      console.error('Form is invalid');
    }
  }

  closeModal() {
    this.isOpen = false;
  }
}
