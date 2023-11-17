import {Component} from '@angular/core';
import {NewsapiserviceService} from "../service/newsapiservice.service";

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent {
  businessNewsDisplay: any = [];

  constructor(private newsService: NewsapiserviceService) {
  }

  ngOnInit() {
    this.newsService.businessNews().subscribe((response) => {
      this.businessNewsDisplay = response.articles;
    })
  }
}
