import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpInterceptor, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


   productURL="http://localhost:49403/api/Product";
   addTocardUrl="http://localhost:49403/api/Cart";
  constructor(private http: HttpClient) { }



  getAllProducts(){

return this.http.get(this.productURL);

  }

  addToCart(x){

    const body = { id: x }
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
return this.http.post(this.addTocardUrl,body,{headers});

  }
}
