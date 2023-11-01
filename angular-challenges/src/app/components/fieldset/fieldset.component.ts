import { Component, Input } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent {
  faMinus = faMinus;
  faPlus = faPlus;
  @Input() legend = '';
  @Input() isOpen = true;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
