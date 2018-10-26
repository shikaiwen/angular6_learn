import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { forbiddenNameValidator } from './username-validator';


@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

//   registrationForm = new FormGroup({
//     userName: new FormControl("keivn"),
//     password: new FormControl(""),
//     confirmPassword: new FormControl("")
//   });

registrationForm = this.fb.group({
    userName:["Vish",[Validators.required,Validators.minLength(3)]],
    password:["Vish",[forbiddenNameValidator]],
    confirmPassword:["Vish"],
})

    userElt:FormControl = null;

  ngOnInit() {
    // this.registrationForm.setValue(new FormGroup({
    //     userName: new FormControl("keivn"),
    //     password: new FormControl(""),
    //     confirmPassword: new FormControl("")
    // }));

    this.registrationForm.patchValue(new FormGroup({
        userName: new FormControl("keivn"),
        password: new FormControl(""),
        confirmPassword: new FormControl("")
    }));

    let userElt = this.registrationForm.get("userName");
    userElt.
  }

}
