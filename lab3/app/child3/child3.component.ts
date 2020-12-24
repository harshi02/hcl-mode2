import { sanitizeIdentifier } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Output() greetEvent = new EventEmitter();
  // tslint:disable-next-line:no-inferrable-types
   ob = {
    name: 'shourya',
    address: 'Nellore',
  };
  constructor() { }

  ngOnInit() {
  }

  callParentGreet() {
    this.greetEvent.emit(this.ob);
  }
  name(name: any) {
    throw new Error('Method not implemented.');
  }

}
