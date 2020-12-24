import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2Module } from './m2/m2.module';
import { Comp12Component } from './m2/comp12/comp12.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, M2Module
  ],
  exports: [
    Comp12Component
  ]
})
export class M1Module { }
