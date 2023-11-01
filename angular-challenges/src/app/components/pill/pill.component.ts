import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PillType } from './model/pill-type.enum';
import { faTag, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent {
  faTag = faTag;
  faTimesCircle = faTimesCircle;
  @Input() public type: PillType = PillType.Info;
  @Input() public label = '';
  @Input() public iconClasses: IconDefinition = faTag;
  @Input() public isActive = false;
  @Input() public canBeSelected = false;
  @Output() public selected = new EventEmitter<{ hasBeenSelected: boolean, label: string}>();

  public toggle(): void {
    this.isActive = !this.isActive;
    this.selected.emit({hasBeenSelected: this.isActive, label: this.label});
  }
}
