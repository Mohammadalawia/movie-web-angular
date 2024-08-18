import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Actor } from '../models/movie.model';
import { ActorService } from '../services/actor.service';
import { PersonCard } from '../components/PersonCard/actorCard.component';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [PersonCard,NgForOf],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css'
})
export class ActorsComponent implements OnInit {
    actors : Actor[] = [];
    actor: Actor = {
        id: 0,
        name: '',
        birthdate: '',
        movies : []
      }


    constructor( private actorService:ActorService){}
    ngOnInit(): void {
        this.getActors();
    }
    public postActor(actorForm: any) {

      if (actorForm.valid) {

        // Post the actor data
        this.actorService.postData(this.actor).subscribe({
          next: (res) => console.log('actor saved:', res),
          error: (err) => console.error('Error:', err)
        });

        // Reset the form
        actorForm.resetForm();
        this.getActors();
      } else {
        console.error('Form is invalid');
      }
    }
    public getActors(){
      this.actorService.getActors().subscribe({
        next : (resp)=>{this.actors=resp},
      error: (error) => {console.log(error)}
    })
    }

}
