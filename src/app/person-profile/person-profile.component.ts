import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../services/actor.service';
import { DirectorService } from '../services/director.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-person-profile',
  standalone: true,
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css'],
  imports:[NgFor,NgIf,CommonModule]
})
export class PersonProfileComponent implements OnInit {
  person: any;
  type: string = '';
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private directorService: DirectorService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type')!;
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.fetchPersonData();
  }

  fetchPersonData(): void {
    if (this.type === 'actor') {
      this.actorService.getActorById(this.id).subscribe(
        (data) => this.person = data,
        (error) => console.error('Error fetching actor:', error)
      );
    } else if (this.type === 'director') {
      this.directorService.getDirectorById(this.id).subscribe(
        (data) => this.person = data,
        (error) => console.error('Error fetching director:', error)
      );
    } else {
      console.error('Invalid type');
    }
  }
}
