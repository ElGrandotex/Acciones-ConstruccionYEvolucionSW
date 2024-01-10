import { Component, Input } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'acc-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {

  //Campos de compra
  protected nombreDatos = [
    'Codigo Compra',
    'Fecha Compra',
    'TOTAL',
  ]

    /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor( private accionesService: AccionesService){}

  //Informacion a utilizar
  get id(){
    return this.accionesService.id;
  }

  get fechaCompra(){
    return this.accionesService.fechaCompra;
  }

  get total(){
    return this.accionesService.valor.toFixed(2);
  }

}
