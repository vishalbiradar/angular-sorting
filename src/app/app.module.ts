import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importing the order module
import { Ng2OrderModule } from 'ng2-order-pipe';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
