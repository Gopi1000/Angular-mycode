import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = new FormControl('');
  color: string;

  boxArray:any;

  constructor() {
    this.color = 'yelloe';

    this.boxArray =[
      {
        'title':'title 1',
        'btntext':'button 1',
        'desc': '1 some quick example text to build on the card in title and make up the build of the card',
        'img':'assets/image/dino.jpg',
        'class':'col-4'
      },
      {
        'title':'title 2',
        'btntext':'button 2',
        'desc': '2 some quick example text to build on the card in title and make up the build of the card',
        'img':'assets/image/tj.png',
        'class':'col-4'

      },
      {
        'title':'title 3',
        'btntext':'button 3',
        'desc': '3 some quick example text to build on the card in title and make up the build of the card',
        'img':'assets/image/farcry5.jpg',
        'class':'col-4'

      },
      {
        'title':'title 4',
        'btntext':'button 4',
        'desc': '4 some quick example text to build on the card in title and make up the build of the card',
        'img':'assets/image/rdr.jpg',
        'class':'col-4'
      },
      {
        'title':'title 5',
        'btntext':'button 5',
        'desc': '5 some quick example text to build on the card in title and make up the build of the card',
        'img':'assets/image/tomandjerry.jpg',
        'class':'col-4'
      },
      {
        'title':'title 6',
        'btntext':'button 6',
        'desc': '6 some quick example text to build on the card in title and make up the build of the card',
        'img':'assets/image/mickey.jpg',
        'class':'col-4'
      }
    ];
  }


  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Gopi');
  }

  changeColor(c: string) {
    this.color = c;

  }
}
