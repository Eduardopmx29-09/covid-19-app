import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
