import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { CovidInfoComponent } from './componentes/covid-info/covid-info.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, CovidInfoComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
