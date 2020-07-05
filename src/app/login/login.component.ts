import { Component, OnInit } from '@angular/core';
import { LoginWsService } from '../services/login-ws.service';
import { Http } from '@angular/http';
import { validateConfig } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { NULL_INJECTOR } from '@angular/core/src/render3/component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isvalid:any;

  constructor(private service:LoginWsService, private router:Router)
  { 

  }
  ngOnInit() 
  {

  }

submit(form)
{
  console.log(form.value["username"]);
  console.log(form.value["password"]);
    this.service.getchecked(form.value["username"],form.value["password"]).subscribe(
      response => {
          console.log(response.text());
          this.isvalid=response.text()=='"NO"'?false:true;
          console.log(this.isvalid);
          this.submitted();
      }, error=>{
        console.log(error);
      }
    ); 
}
submitted()
  {
  if(this.isvalid)
  {
    this.router.navigate(['home']);
  }
}
}
