import { Component, Input } from '@angular/core';

import { Actor } from '../../models/movie.model';
import { Director } from '../../models/movie.model';
import { NgIf } from '@angular/common';
@Component({
  selector: 'personCard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './actorCard.component.html',
  styleUrls: ['./actorCard.component.css']
})
export class PersonCard  {

@Input()  actor ?: Actor;
@Input() director?: Director;

get isActor(): boolean {
  return !!this.actor;
}

get isDirector(): boolean {
  return !!this.director;
}
}
