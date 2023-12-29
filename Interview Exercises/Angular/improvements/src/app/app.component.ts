import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private lastCard: number = 0;
  cards: number[] = [];

  appendCard = () => {
    this.cards.push(++this.lastCard);
  }

  prependCard = () => {
    this.cards.unshift(++this.lastCard)
  }
}
