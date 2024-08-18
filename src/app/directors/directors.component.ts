import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Director } from '../models/movie.model';
import { DirectorService } from '../services/director.service';
import {  PersonCard } from '../components/PersonCard/actorCard.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-directors',
  standalone: true,
  imports: [PersonCard, NgFor],
  templateUrl: './directors.component.html',
  styleUrl: './directors.component.css'
})
export class DirectorsComponent implements OnInit {
    directors : Director[] = [];
    director: Director = {
        id: 0,
        name: '',
        birthdate: '',
        movies : []
      }


    constructor( private directorService:DirectorService){}
    ngOnInit(): void {
        this.getDirectors();
    }
    public postDirector(directorForm: any) {

      if (directorForm.valid) {

        // Post the director data
        this.directorService.postData(this.director).subscribe({
          next: (res) => console.log('director saved:', res),
          error: (err) => console.error('Error:', err)
        });

        // Reset the form
        directorForm.resetForm();
        this.getDirectors();
      } else {
        console.error('Form is invalid');
      }
    }
    public getDirectors(){
      this.directorService.getDirectors().subscribe({
        next : (resp)=>{this.directors=resp},
      error: (error) => {console.log(error)}
    })
    }

}
