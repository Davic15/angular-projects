import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      offset: 100
    })
  }
}
