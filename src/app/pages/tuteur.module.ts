import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuteurComponent} from "./tuteur.component";
import {TuteurListComponent} from "./components/tuteur-list/tuteur-list.component";
import {TuteurDetailsComponent} from "./components/tuteur-details/tuteur-details.component";
import {TuteurRoutingModule} from "./tuteur-routing.module";



@NgModule({
  declarations: [
    TuteurComponent,
    TuteurListComponent,
    TuteurDetailsComponent
  ],
  imports: [
    CommonModule,
    TuteurRoutingModule
  ]
})

export class TuteurModule { }
