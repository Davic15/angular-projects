import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {Character} from "@shared/interfaces/character.interface";
import {CharacterService} from "@shared/services/character.service";
import {filter, take} from "rxjs";
import {ActivatedRoute, NavigationEnd, Params, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";


type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  info: RequestInfo = {
    next: null,
  }
  private pageNum = 1;
  private query?: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  showGoUpButton = false;

  constructor(@Inject(DOCUMENT) private document:Document,private characterService: CharacterService, private route: ActivatedRoute, private router: Router) {
    this.onUrlChanged();
  }

  ngOnInit() {
    this.getCharactersByQuery();
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: Params) => {
      this.query = params['q'];
      console.log(this.query)
      this.getDataFromService()
    })
  }

  private getDataFromService(): void {
    this.characterService.searchCharacters(this.query, this.pageNum).pipe(take(1)).subscribe((res: any) => {
      if (res?.results?.length) {
        const {info, results} = res;
        this.characters = [...this.characters, ...results];
        this.info = info;
      } else {
        this.characters = [];
      }
    })
  }

  @HostListener('window: scroll', [])
  onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    if((yOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if(this.showGoUpButton && (yOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false
    }
  }

  onScrollDown(): void{
    if(this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }
  onScrollTop(): void {
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0; //Other
  }
}
