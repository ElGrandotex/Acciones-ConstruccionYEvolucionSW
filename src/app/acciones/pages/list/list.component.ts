import { Component,Input } from '@angular/core';
import { Accion } from '../../interfaz/accion.interface';

@Component({
  selector: 'acc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

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

}
