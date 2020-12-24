import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
  <p *ngIf="Compydata">welcome to our company</p>
  <p *ngIf="!Compydata">please log in </p>
  `,
  styles: []
})
export class Child1Component implements OnInit {
  @Input() Compydata: boolean;
  constructor() { }

  ngOnInit() {
  }

}
