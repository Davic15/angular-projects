import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'David 1', last: 'Macias', dob: '15/08/88' },
    { first: 'David 2', last: 'Macias', dob: '15/08/88' },
    { first: 'David 3', last: 'Macias', dob: '15/08/88' },
    { first: 'David 4', last: 'Macias', dob: '15/08/88' },
  ];

  @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
