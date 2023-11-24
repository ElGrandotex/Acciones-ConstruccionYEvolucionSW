import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    ListComponent
  ]
})
export class AccionesModule { }
