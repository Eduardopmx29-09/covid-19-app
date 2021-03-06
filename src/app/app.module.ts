import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/nav/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
