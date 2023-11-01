import { Component, Input } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() public quote = '';
  @Input() public author = '';
  @Input() public occupation = '';
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
}
