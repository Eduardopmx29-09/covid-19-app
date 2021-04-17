import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/componentes/home/home.component';
import { AboutComponent } from './pages/componentes/about/about.component';
import { ContactComponent } from './pages/componentes/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'covid19', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
