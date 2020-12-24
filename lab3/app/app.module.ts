import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { M1Module } from './m1/m1.module';
import { Child1Component } from './child1/child1.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child3Component
  ],
  imports: [
    BrowserModule, M1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
