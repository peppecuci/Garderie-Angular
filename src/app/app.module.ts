import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuteurComponent } from './components/tuteur/tuteur.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { TuteurDetailsComponent } from './pages/components/tuteur-details/tuteur-details.component';
import { TuteurListComponent } from './pages/components/tuteur-list/tuteur-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
