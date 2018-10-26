import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
//   templateUrl: './app.component.html',
  template: `
  <input type="text" #utext value="{{title}}" (click)="textClick(utext.value)"/>
  <span>{{utext.value}}</span>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  userModel = new User("kevin","kaiwencina@gmail.com","");

  textClick(evt){
    console.log(evt);
    
  }

}
