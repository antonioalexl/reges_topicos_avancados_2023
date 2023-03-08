import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { AppClienteFrmComponent } from './app-cliente-frm/app-cliente-frm.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AppClienteFrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
