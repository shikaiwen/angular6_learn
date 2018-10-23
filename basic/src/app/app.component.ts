import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',

  // event binding
  // template:`
  //   <input type="text" #myInput  value="">
  //   <button (click)="log1(myInput.value)" >LogIt</button>
  // `,

  // two way binding
//   template:`
//   <input [(ngModel)]="name" />
//   {{name}}
// `,


  // *ngIf
//   template:`
//   <h2 *ngIf="displayFlag">Shikaiwen</h2>  
// `,

  // *ngIf
//   template:`
//   <h2 *ngIf="displayFlag"></h2>  

//   <div *ngIf="displayFlag; then thenBlock; else elseBlock"></div>

//   <ng-template #thenBlock>
//     <h2>Codevolution</h2>
//   </ng-template>

//   <ng-template #elseBlock>
//   <h2>Name is Hidden</h2>
// </ng-template>
// `,


// ngSwitch directive
  // template:`
  // <div [ngSwitch]="color">
  //   <div *ngSwitchCase="'red'"> red is picked </div>
  //   <div *ngSwitchCase="'green'"> red is pigreencked </div>
  //   <div *ngSwitchCase="'yellow'"> red is yellow </div>
  //   <div *ngSwitchDefault> this default color </div>
  // </div>
  // `,

  // for directive
  template:`
  <ul>
    <li *ngFor="let employee of employeeList"> {{employee.id}} </li>
  </ul>
  `,

// @input to childcomponent1
  // template:`
  // <app-childcomponent1 [parentData]="datastr">
  // </app-childcomponent1>
  // `,


  // @Output from childcomponent1
  // template:`
  //  <app-childcomponent1 (childEvent)="message=$event" >
  //  </app-childcomponent1>

  //  {{message}}
  // `,



  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'basic';

  color = "red";
  colors = ["red","orange","black","pink"]


  employeeService= null;

  constructor(private eService:EmployeeService){
    // this.employeeService = eService;
  }



  displayFlag = true;

  name = "";

  datastr = "this is a string from app component";

  public message = "";

  public employeeList = [];

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    // this.employeeList = this.eService.getEmployees();
    this.eService.getEmployees().subscribe(data => this.employeeList = data);
  }

  log1(value){
    console.log(value)
  }

  greet(){
    console.log("hello")
  }
}
