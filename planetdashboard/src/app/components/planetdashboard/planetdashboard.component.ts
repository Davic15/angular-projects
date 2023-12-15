import {Component, OnInit} from '@angular/core';
import {PlanetService} from "../../services/planet.service";
import {Planet} from "../../models/planet";

@Component({
  selector: 'app-planetdashboard',
  templateUrl: './planetdashboard.component.html',
  styleUrls: ['./planetdashboard.component.css']
})
export class PlanetdashboardComponent implements OnInit {

  planets: Planet[] = [];

  constructor(private service: PlanetService) {
  }

  ngOnInit() {
    this.service.getAllPlanets().subscribe(data => {
      this.planets = data;
      console.log(data)
    })
  }

}
