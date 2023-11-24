import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'acc-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  searchTag(){

  }

}
