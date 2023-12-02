import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, switchMap, throwError} from "rxjs";
import {Joke} from "../model/joke.model";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  baseUrl = 'https://api.chucknorris.io/jokes/random';
  baseUrlCategory = 'https://api.chucknorris.io/jokes/random?category='
  baseUrlCategories = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient) {
  }

  randomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.baseUrl).pipe(switchMap(response => {
      if (response.value == '') {
        return throwError(() => new Error('Joke not found!'));
      }
      return of(response);
    }))
  }

  randomJokeByCategory(category: string): Observable<Joke> {
    return this.http.get<Joke>(this.baseUrlCategory + category).pipe(switchMap(response => {
      if (response.value == '') {
        return throwError(() => new Error('Joke not found!'));
      }
      return of(response);
    }))
  }

  categoryList(): Observable<any> {
    return this.http.get(this.baseUrlCategories).pipe(switchMap(response => {
      if(!response) {
        return throwError(() => new Error('No Categories found!'));
      }
      return of(response);
    }))
  }


}
