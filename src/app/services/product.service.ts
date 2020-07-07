import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url="https://localhost:44373/api/";
  constructor(private http:Http) { }

  getAllBeds()
  {
    return this.http.get(this.url+"Bed");
  }

  getAllTables()
  {
    return this.http.get(this.url+"Dining");
  }

}
