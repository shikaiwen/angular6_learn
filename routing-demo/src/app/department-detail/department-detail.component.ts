import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      you selected department {{departmentId}}
    </p>

    <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
    <a (click)="previous()">Previout</a><br/>
    <a (click)="next()">next</a>
    </p>
    <button (click)="backToDepartments()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private avRouter:ActivatedRoute,private router: Router) { }

  public departmentId;

  ngOnInit() {
    // let id = parseInt(this.router.snapshot.paramMap.get("id"));
    // this.departmentId = id;
    this.avRouter.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get("id"));
        this.departmentId = id;
    })

  }

  previous(){
    // this.r.navigate(["/departments",this.departmentId-1]);
    this.router.navigate(["../",this.departmentId-1],{relativeTo:this.avRouter});
  }
  next(){
    // this.router.navigate(["/departments",this.departmentId+1]);
    this.router.navigate(["../",this.departmentId-1],{relativeTo:this.avRouter});
  }

  backToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // url;id=1 这种形式
    // this.router.navigate(["departments/",{id:selectedId,test:"testvalue"}]);

    this.router.navigate(["../",{id:selectedId,test:"testvalue"}],{relativeTo:this.avRouter});

  }

  showOverview(){
        this.router.navigate(["overview"],{relativeTo:this.avRouter});
  }

  showContact(){
    this.router.navigate(["contact"],{relativeTo:this.avRouter});
  }

}
