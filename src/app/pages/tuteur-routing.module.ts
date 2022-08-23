import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TuteurComponent} from "./tuteur.component";
import {TuteurDetailsComponent} from "./components/tuteur-details/tuteur-details.component";

const routes: Routes = [
  { path: "", component: TuteurComponent, children: [
      { path: ":id", component: TuteurDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TuteurRoutingModule { }
