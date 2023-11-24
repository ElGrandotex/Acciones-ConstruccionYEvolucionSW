import { Component } from '@angular/core';

@Component({
  selector: 'acc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
