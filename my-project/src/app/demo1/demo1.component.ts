import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/services/maths.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
  providers:[MathsService]
})
export class Demo1Component implements OnInit {

  constructor(public _maths: MathsService) { }

  ngOnInit(): void {
  }

  Increase(){
    this._maths.addOne();
  }

}
