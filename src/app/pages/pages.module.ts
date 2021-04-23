import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { Covid19Module } from './componentes/covid-info/covid19.module';




@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    Covid19Module,
    HttpClientModule
  ]
})
export class PagesModule { }
