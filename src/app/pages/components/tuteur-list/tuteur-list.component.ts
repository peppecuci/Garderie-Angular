import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  private list: any[] = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get<any[]>("https://demo-web-api-spring-boot.herokuapp.com/tuteur/1").subscribe(data => console.log(data));
  }

}
