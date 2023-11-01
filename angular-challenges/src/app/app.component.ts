import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/Title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-challenges';

  constructor(public titleService: TitleService) { }

  public ngOnInit() {
    this.titleService.initializeTitleService();
  }
  
}
