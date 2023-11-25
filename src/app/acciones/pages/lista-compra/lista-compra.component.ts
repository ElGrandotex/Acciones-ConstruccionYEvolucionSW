import { Component, Input } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';
import { v4 as identificador} from 'uuid'

@Component({
  selector: 'acc-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {

  protected nombreDatos = [
    'Codigo Compra',
    'Fecha Compra',
    'TOTAL',
  ]
  protected id: string = identificador();
  protected fechaActual: Date = new Date();
  protected anio = this.fechaActual.getFullYear();
  protected mes = this.fechaActual.getMonth()+1;
  protected dia = this.fechaActual.getDate();
  protected hora = this.fechaActual.getHours();
  protected minuto = this.fechaActual.getMinutes();
  protected segundo = this.fechaActual.getSeconds();

  constructor( private accionesService: AccionesService){}

  get total(){
    return this.accionesService.valor;
  }


}
