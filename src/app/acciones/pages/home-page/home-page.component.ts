import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';
import { Accion } from '../../interfaz/accion.interface';

@Component({
  selector: 'acc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor( private accionesService: AccionesService){}

  get listaAcciones(): Accion{
    return this.accionesService.listaAcciones;
  }

  get mostradorTabla(): boolean{
    return this.accionesService.mostradorTabla;
  }

}
