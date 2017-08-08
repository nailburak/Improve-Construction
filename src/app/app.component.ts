import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  images = [];

  constructor() {
    
  }

  ngOnInit() {
    for(let i = 1689; i <=  1695; i++) {
      this.images.push('IMG_' + i + '.JPG');
    }
    console.log(this.images);
  }

}
