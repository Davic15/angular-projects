import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, switchMap, throwError} from "rxjs";
import {Joke} from "../models/joke.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{
  baseUrl = "https://icanhazdadjoke.com/";
  headers = new HttpHeaders().set('Accept', 'application/json');

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getJoke():Observable<Joke> {
    return this.http.get<Joke>(this.baseUrl, {headers: this.headers}).pipe(switchMap(response => {
      const res = response;
      if(res.status != 200) {
        return throwError(() => new Error('No Joke Found'));
      }
      return of(res)
    }))
  }

}
