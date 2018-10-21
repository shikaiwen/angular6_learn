import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childcomponent1',
  // templateUrl: './childcomponent1.component.html',

  template:`
     {{"Hello"+parentData}}

     <button (click)="fireEvent()">fire event</button>
  `,


  styleUrls: ['./childcomponent1.component.css']
})
export class Childcomponent1Component implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit("this is child event");
  }

}
