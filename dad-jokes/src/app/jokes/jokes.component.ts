import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  currentJoke = '';
  buttonDisable = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {

  }

  getNewJoke() {
    this.api.getJoke().subscribe(response => {
      this.currentJoke = response.joke;
      this.buttonDisable = response.status !== 200;
    })
  }

}
