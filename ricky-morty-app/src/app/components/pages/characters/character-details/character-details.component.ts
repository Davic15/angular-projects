import {Component, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {Character} from "@shared/interfaces/character.interface";
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "@shared/services/character.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$?: Observable<Character>;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private location: Location) {
  }

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterService.getDetails(id)
    })
  }

  onGoBack() {
    this.location.back();
  }

}
