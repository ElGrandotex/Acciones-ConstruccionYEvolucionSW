import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';
import { Accion } from '../../interfaz/accion.interface';

@Component({
  selector: 'acc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

    /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor( private accionesService: AccionesService){}

  // Lista de informacion de acciones
  get listaAcciones(): Accion{
    return this.accionesService.listaAcciones;
  }

  //Controlador de tabla
  get mostradorTabla(): boolean{
    return this.accionesService.mostradorTabla;
  }

}
