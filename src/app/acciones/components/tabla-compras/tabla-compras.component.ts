import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';
import { Compras } from '../../interfaz/compras.interface';
import {Sort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'acc-tabla-compras',
  templateUrl: './tabla-compras.component.html',
  styleUrls: ['./tabla-compras.component.css']
})
export class TablaComprasComponent {

  ordenActual: string = 'asc'; // Dirección inicial del ordenamiento
  listaComprasOrdenada!: Compras[];

    /**
   * @description
   * Constructor
   * @param accionesService Consumo de servicio
   */
  constructor( private accionesService: AccionesService){}

  //Listado de compras realizadas
  get listaComprasRealizadas(){
    return this.accionesService.listaCompras;
  }

  sortData(sort: Sort) {
    const data = this.listaComprasRealizadas.slice();
    if (!sort.active || sort.direction === '') {
      this.listaComprasOrdenada = data;
      return;
    }

    this.listaComprasOrdenada = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Id':
          return compare(a.Id, b.Id, isAsc);
        case 'Nombre':
          return compare(a.Nombre, b.Nombre, isAsc);
        case 'Fecha':
          return compare(a.Fecha, b.Fecha, isAsc);
        case 'PrecioCompra':
          return compare(a.PrecioCompra, b.PrecioCompra, isAsc);
        case 'Volumen':
          return compare(a.Volumen, b.Volumen, isAsc);
        case 'Total':
          return compare(a.Total, b.Total, isAsc);
        case 'PrecioActual':
          return compare(a.PrecioActual, b.PrecioActual, isAsc);
        case 'DiferenciaPorcentaje':
          return compare(a.DiferenciaPorcentaje, b.DiferenciaPorcentaje, isAsc);
        case 'Diferencia':
          return compare(a.Diferencia, b.Diferencia, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
