import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departments',
//   templateUrl: './departments.component.html',
    template:`
        <ul>
            <li [class.selected]="isSelected(department)" (click)="onSelect(department)" *ngFor="let department of departments">
                {{department.id}}
            </li>
        </ul>
    `,
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private avRouter:ActivatedRoute , private router:Router) { }

    departments = [
        {id:1,name:"Math"},
        {id:2,name:"Language"},
        {id:3,name:"History"},
    ]


  public selectedId;

  ngOnInit() {
        this.avRouter.paramMap.subscribe((params:ParamMap)=>{
            let id = parseInt(params.get("id"));
            this.selectedId = id;
        })
  }

  onSelect(department){
    this.router.navigate([department.id], {relativeTo:this.avRouter});

    // this.router.navigate([{department.id}]);
  }

  isSelected(department){
      return department.id === this.selectedId;
  }
}
