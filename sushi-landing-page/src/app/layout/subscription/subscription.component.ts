import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      offset: 100
    })
  }
}
