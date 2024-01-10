import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'acc-tabla-compras',
  templateUrl: './tabla-compras.component.html',
  styleUrls: ['./tabla-compras.component.css']
})
export class TablaComprasComponent {

    /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor( private accionesService: AccionesService){}

  //Listado de compras realizadas
  get listaComprasRealizadas(){
    return this.accionesService.listaCompras;
  }
}
