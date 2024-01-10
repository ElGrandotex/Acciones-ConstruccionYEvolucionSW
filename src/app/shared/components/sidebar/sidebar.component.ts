import { Component } from '@angular/core';
import { AccionesService } from 'src/app/acciones/services/acciones.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor( private accionService: AccionesService){}

  //Busquedas realizadas
  get busquedas(){
    return this.accionService.tagsHistory;
  }

  //Control de tabla
  get mostradorTabla(): boolean{
    return this.accionService.mostradorTabla;
  }

  //Buscar usando la lista de busquedas anteriores
  buscarAnterior( valor:string ): void {
    this.accionService.apiPeticion(valor)
  }
}
