import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  faTimes = faTimes;
  public isHidden = true;
  @Input() public title = '';

  public close(): void {
    this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }
}
