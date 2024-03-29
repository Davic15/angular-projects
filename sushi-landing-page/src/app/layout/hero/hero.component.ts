import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      offset: 100
    })
  }
}
