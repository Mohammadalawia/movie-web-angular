import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstViewComponent } from './my-first-view/my-first-view.component';
import { About } from './components/aboutUs/about.component';
import { ActorsComponent } from './actors/actors.component';
import { DirectorsComponent } from './directors/directors.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
export  const  routes: Routes = [
  { path: 'add-movie', component: MyFirstViewComponent },
  {path: 'about', component: About},
  {path:'actors', component: ActorsComponent},
  {path: 'directors', component: DirectorsComponent},
  {path: 'profile/:type/:id', component: PersonProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
