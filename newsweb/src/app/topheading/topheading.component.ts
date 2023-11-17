import {Component, OnInit} from '@angular/core';
import {NewsapiserviceService} from "../service/newsapiservice.service";

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit{
  topheadingDisplay: any = [];
  constructor(private newsapiservice: NewsapiserviceService) {
  }

  ngOnInit() {
    this.newsapiservice.topHeading().subscribe((response => {
      console.log((response))
      this.topheadingDisplay = response.articles
    }))
  }




}
