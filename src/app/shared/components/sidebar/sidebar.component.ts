import { Component } from '@angular/core';
import { AccionesService } from 'src/app/acciones/services/acciones.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private accionService: AccionesService){}

  get busquedas(){
    return this.accionService.tagsHistory;
  }
}
