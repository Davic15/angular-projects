import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.scss']
})
export class PillFiltersComponent {
  @Input() pillLabels: string[] = [];
  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unSelectedPills = value;
  }

  public unSelectedPills: string[] = [];
  public selectedPills: string[] = [];

  public addFilter(pillDetails: {hasBeenSelected: boolean, label: string}): void {
    if(pillDetails.hasBeenSelected) {
      const selectedIndex = this.unSelectedPills.indexOf(pillDetails.label);
      const [selectedPills] = this.unSelectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPills);
      this.selected.emit(this.selectedPills)
    }
  }

  public selected = new EventEmitter<string[]>();

  public removeFilter(pillDetails: {hasBeenSelected: boolean, label: string}): void {
    if(!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPills] = this.selectedPills.splice(selectedIndex, 1);
      this.unSelectedPills.push(selectedPills);
    }
  }
}
