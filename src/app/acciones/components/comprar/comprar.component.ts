import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccionesService } from '../../services/acciones.service';

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
    this.accionesService.calcularCompra(parseFloat(volumen))
    this.volumen.nativeElement.value = ''
  }

  get mostrarCompra(){
    return this.accionesService.mostradorTabla;
  }

}
