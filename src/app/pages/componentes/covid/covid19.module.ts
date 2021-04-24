import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Covid19RoutingModule } from './covid19-routing.module';
import { CovidInfoComponent } from './pages-covid/componentes/covid-info/covid-info.component';
import { PagesModule } from '../../pages.module';
import { CovidCountryComponent } from './componentes/covid-country/covid-country.component';



@NgModule({
  declarations: [CovidInfoComponent, CovidCountryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    Covid19RoutingModule,

  ]
})
export class Covid19Module { }
