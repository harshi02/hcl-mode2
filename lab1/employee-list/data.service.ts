import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// Create array

  constructor() { }
  // Create simple angular service method
  servicemethod() {
  return  [
    'dancing',
    'singing',
    'internet'
    ];
  }

}
