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
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,this.passwordValidator])
    });
  }
  onSumbit(){
    console.log(this.reactiveForm);
  }
  passwordValidator(control: any): { [key: string]: boolean } | null {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;

    if (!passwordRegex.test(control.value)) {
      return { 'invalidPassword': true };
    }

    return null;
  }
}
