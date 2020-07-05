import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Signup} from '../shared/signup';
import { LoginWsService } from '../services/login-ws.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;
  signup:Signup;
  constructor(private fb:FormBuilder,private service: LoginWsService)
  { 
    this.createForm();
  }
  createForm()
  {
    this.signupform=this.fb.group({
      username:'',
      password:'',
      confirmpassword:''
    });
  }
  ngOnInit() {
  }

  onsubmit()
  {
    this.signup=this.signupform.value;
    if(this.signupform.value["password"]===this.signupform.value["confirmpassword"])
    {
    this.service.register(this.signupform.value["username"],this.signupform.value["password"]).subscribe(
      response => {
        if(response.statusText==="OK")
        alert("Signup successfull");
      }, error=>{
        console.log(error);
      }
    ); 
    }
    else
    {
      this.signupform.setErrors({"notequal":true})
    }
  }

}
