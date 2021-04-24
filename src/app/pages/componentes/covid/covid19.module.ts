import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Covid19RoutingModule } from './covid19-routing.module';
import { CovidInfoComponent } from './pages-covid/componentes/covid-info/covid-info.component';
import { PagesModule } from '../../pages.module';



@NgModule({
  declarations: [CovidInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    Covid19RoutingModule,

  ]
})
export class Covid19Module { }