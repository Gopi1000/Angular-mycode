import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  Counter : number =100;

  constructor() { }

  addOne(){
    this.Counter++;
  }
}
