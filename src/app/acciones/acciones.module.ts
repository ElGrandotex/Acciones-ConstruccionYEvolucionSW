import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './pages/list/list.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { ListaCompraComponent } from './pages/lista-compra/lista-compra.component';
import { TablaComprasComponent } from './components/tabla-compras/tabla-compras.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListComponent,
    ComprarComponent,
    ListaCompraComponent,
    TablaComprasComponent
  ],
  imports: [
    CommonModule,
    MatSortModule
  ],
  exports: [
    HomePageComponent,
    ListComponent
  ]
})
export class AccionesModule { }
