import {Component, OnInit} from '@angular/core';
import {NewsapiserviceService} from "../service/newsapiservice.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit{
  techNewsDisplay: any = [];
  constructor(private newsService: NewsapiserviceService) {
  }

  ngOnInit() {
    this.newsService.techNews().subscribe((response) => {
      this.techNewsDisplay = response.articles;
    })
  }

}
