import { Component,ViewChild,ElementRef } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'acc-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private accionesService: AccionesService) {}

  searchTag(){
    const symbol = this.tagInput.nativeElement.value;
    this.accionesService.apiPeticion(symbol);
    this.tagInput.nativeElement.value = '';
  }

}
