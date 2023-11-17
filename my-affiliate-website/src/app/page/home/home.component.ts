import {Component, OnInit} from '@angular/core';
import {ApiServicesService} from "../../services/api-services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiServices: ApiServicesService) {
  }

  categoryList: any = ['all', 'hosting', 'ecommerce', 'finance', 'course', 'product', 'travel'];
  showAllData: any = [];

  ngOnInit() {
    this.homeData();
  }

  homeData() {
    this.apiServices.homeApi().subscribe((response) => {
      console.log(response);
      if(response.length > 0) {
        this.showAllData = response;
      }

    })
  }


}
