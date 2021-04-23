import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/componentes/home/home.component';
import { AboutComponent } from './pages/componentes/about/about.component';
import { ContactComponent } from './pages/componentes/contact/contact.component';
import { CovidInfoComponent } from './pages/componentes/covid-info/componentes/covid-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'covid19', component:CovidInfoComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
