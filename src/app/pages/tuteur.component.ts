import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-tuteur',
  templateUrl: './tuteur.component.html',
  styleUrls: ['./tuteur.component.css']
})
export class TuteurComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    const params = new HttpHeaders().append("Authorization", `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlcyI6WyJST0xFX1BFUlNPTk5FTCJdLCJleHAiOjE2NjEzMzExMDF9.c1T2UJzcaty9OYeTUBlwu1_3aSyU8OAHJQj3_M1cT3XCLsR15VhpClbf3UP-a0-fw015mw6dIIDGe6jThNDFfQ'`)
    this._http.get("http://localhost:8080/tuteur/all", {headers: params}).subscribe(data => console.log(data))
  }


}
