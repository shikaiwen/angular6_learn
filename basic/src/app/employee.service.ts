import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {id:"1",name:"kevin",age:28},
      {id:"2",name:"add",age:28},
      {id:"3",name:"bbb",age:28}
    ]
  }
}
