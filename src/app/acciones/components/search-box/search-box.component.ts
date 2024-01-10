import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'acc-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  //Obtener informacion de busqueda
  @ViewChild('txtTagInput')
  public tagBuscado!: ElementRef<HTMLInputElement>;

  /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor(private accionesService: AccionesService) { }

  /**
   * @description
   * Consumo de api con la busqueda realizada por el usuario
   */
  searchTag() {
    const symbol = this.tagBuscado.nativeElement.value;
    this.accionesService.apiPeticion(symbol);
    this.tagBuscado.nativeElement.value = '';
  }

}
