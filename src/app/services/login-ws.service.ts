import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Login} from '../shared/login';
@Injectable({
  providedIn: 'root'
})
export class LoginWsService {
  private url="https://localhost:44373/api/Login";
  constructor(private http:Http) 
  { }
  getchecked(us,ps) 
  {
    return this.http.get(this.url+"?username="+us+"&password="+ps);
  }

  register(us,ps)
  {
    return this.http.get(this.url+"?us="+us+"&ps="+ps);
  }
}
