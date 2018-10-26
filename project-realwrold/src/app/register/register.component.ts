
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }


  registrationForm: FormGroup;

    get email(){
        return this.registrationForm.get("email");
    }

  submitForm(e){
    let formElt = e.target;
    console.log(formElt)
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
        username:new FormControl(""),
        email:new FormControl("")
    });

  }

}
