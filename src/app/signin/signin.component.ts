import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  reactiveForm:FormGroup;

  ngOnInit(){
    this.reactiveForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null),
      password:new FormControl(null)
    });
  }
  onSumbit(){
    console.log(this.reactiveForm);
  }
}
