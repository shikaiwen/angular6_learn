import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeService {

  private _url :string = "/assets/data/employee.json";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{

    return this.http.get<(IEmployee[])>(this._url);

    // return [
    //   {id:"1",name:"kevin",age:28},
    //   {id:"2",name:"add",age:28},
    //   {id:"3",name:"bbb",age:28}
    // ]
  }
}
