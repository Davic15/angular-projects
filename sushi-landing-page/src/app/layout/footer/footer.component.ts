import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      offset: 100
    })
  }
}
