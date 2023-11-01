import { Component, Input } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AccordionItem } from './accordion-item.interface';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public items: AccordionItem[] = [];
  public iconClasses: IconProp = faChevronDown;
  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
