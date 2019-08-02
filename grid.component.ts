import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  config = {
    columnOrder: ['c4', 'c5', 'c1', 'c3', 'c2'],
    columns: {
      c1: {
        title: 'Manufacturer',
      },
      c2: {
        title: 'Model'
      },
      c3: {
        title: 'Capacity'
      },
      c5: {
        title: 'Power'
      },
      c4: {
        title: 'Price'
      }
    },
    data: [
      {
        c1: 'Mercedes',
        c2: 'E320',
        c3: '3.2',
        c5: '250',
        c4: '50000'
      },
      {
        c1: 'BMW',
        c2: '320',
        c3: '3.2',
        c5: '300',
        c4: '45000'
      },
      {
        c1: 'VW',
        c2: 'Golf',
        c3: '1.4',
        c5: '150',
        c4: '20000'
      },
      {
        c1: 'Opel',
        c2: 'Kadet',
        c3: '1.6',
        c5: '80',
        c4: '800'
      },
      {
        c1: 'VW',
        c2: 'Jetta',
        c3: '2.0',
        c5: '115',
        c4: '15000'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
