import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';
import { Compras } from '../../interfaz/compras.interface';

@Component({
  selector: 'acc-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {

  @ViewChild('volumen')
  public volumen!: ElementRef<HTMLInputElement>;

  constructor( private accionesService: AccionesService){}

  comprar(){
    console.log(this.volumen.nativeElement.value);
    const volumen = this.volumen.nativeElement.value;
    this.accionesService.calcularCompra(parseFloat(volumen));
    this.volumen.nativeElement.value = '';

    const nuevaCompra: Compras = {
      'Id': this.accionesService.id,
      'Nombre': this.accionesService.listaAcciones['01. symbol'],
      'Fecha' : this.accionesService.fechaCompra,
      'PrecioCompra' : parseFloat(this.accionesService.listaAcciones['05. price']).toFixed(2),
      'Volumen' : parseFloat(volumen),
      'Total' : this.accionesService.valor.toFixed(2)
    };

    this.accionesService.agregarCompra(nuevaCompra);
    console.log(nuevaCompra);

  }

  get mostrarInput(){
    return this.accionesService.mostradorTabla;
  }

  get mostrarCompra(){
    return this.accionesService.mostrarCompra;
  }

  get mostrarRegistro(){
    return this.accionesService.mostrarRegistro;
  }
}
