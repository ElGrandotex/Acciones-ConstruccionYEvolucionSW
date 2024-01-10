import { Component,Input } from '@angular/core';
import { Accion } from '../../interfaz/accion.interface';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'acc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Campos a mostrar
  protected nombreDatos = [
    'Nombre',
    'Precio',
    'Apertura',
    'Alto',
    'Bajo',
    'Actual',
    'Volumen',
    'Ultima Fecha de Operaciones',
    'Precio Cierre',
    'Cambio',
    'Porcentaje de Cambio'
  ]

  //Obtener informacion
  @Input()
  public listaAcciones: Accion = {
    "01. symbol":             '',
    "02. open":               '',
    "03. high":               '',
    "04. low":                '',
    "05. price":              '',
    "06. volume":             '',
    "07. latest trading day": '',
    "08. previous close":     '',
    "09. change":             '',
    "10. change percent":     '',
  };

    /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor( private accionSrv: AccionesService){}
}
