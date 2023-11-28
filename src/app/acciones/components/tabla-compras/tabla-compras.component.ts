import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'acc-tabla-compras',
  templateUrl: './tabla-compras.component.html',
  styleUrls: ['./tabla-compras.component.css']
})
export class TablaComprasComponent {


  constructor( private accionesService: AccionesService){}

  get listaComprasRealizadas(){
    return this.accionesService.listaCompras;
  }
}
