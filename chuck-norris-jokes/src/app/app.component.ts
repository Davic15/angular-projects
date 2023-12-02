import {Component, OnInit} from '@angular/core';
import {JokeService} from "./services/joke.service";
import {Joke} from "./model/joke.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  randomJoke: Joke | undefined;
  categoryList: [] = [];
  constructor(private jokeService: JokeService) {
  }

  ngOnInit() {
    this.getRandomJoke();
    this.getCategoryList();
  }

  getRandomJoke() {
    this.jokeService.randomJoke().subscribe(response => {
      this.randomJoke = response;
    })
  }

  getCategoryList() {
    this.jokeService.categoryList().subscribe(response => {
      this.categoryList = response;
    })
  }

  getJokeByCategoryHandler(category: string) {
    this.jokeService.randomJokeByCategory(category).subscribe(response => {
      this.randomJoke = response;
    })
  }
}
