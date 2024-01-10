import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';
import { Compras } from '../../interfaz/compras.interface';

@Component({
  selector: 'acc-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {

  // Numero de acciones a comprar ingresadas por el usuario
  @ViewChild('volumen')
  public volumen!: ElementRef<HTMLInputElement>;

  // constructor
  constructor(private accionesService: AccionesService) { }

  /**
  * @description
  *Calcula el valor de la compra y agrega la compra a la lista de acciones antes compradas
  */
  comprar() {
    const volumen = parseFloat(this.volumen.nativeElement.value);
    this.accionesService.calcularCompra(volumen);
    this.volumen.nativeElement.value = '';

    const nuevaCompra: Compras = {
      'Id': this.accionesService.id,
      'Nombre': this.accionesService.listaAcciones['01. symbol'],
      'Fecha': this.accionesService.fechaCompra,
      'PrecioCompra': parseFloat(this.accionesService.listaAcciones['05. price']).toFixed(2),
      'Volumen': volumen,
      'Total': this.accionesService.valor.toFixed(2)
    };

    this.accionesService.agregarCompra(nuevaCompra);
  }

  // Controladores para mostrar informacion
  get mostrarInput() {
    return this.accionesService.mostradorTabla;
  }

  get mostrarCompra() {
    return this.accionesService.mostrarCompra;
  }

  get mostrarRegistro() {
    return this.accionesService.mostrarRegistro;
  }
}
