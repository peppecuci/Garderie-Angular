import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TuteurComponent} from "./components/tuteur/tuteur.component";
import {HomeComponent} from "./components/home/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tuteur', loadChildren: () => import("./pages/tuteur.module").then(m => m.TuteurModule)}
]

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
