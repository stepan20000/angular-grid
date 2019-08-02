import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-header, [app-grid-header]',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.css']
})
export class GridHeaderComponent implements OnInit {
  @Input() columns;
  constructor() { }

  ngOnInit() {
    console.log('GridHeaderComponent');
  }

  get titles(): string[] {
    return Object.keys(this.columns).map(columnId => this.columns[columnId].title);
  }

}
