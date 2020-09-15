import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products:any;
  public shoppingList:any[];
  constructor(private service:ServicesService) { 
  }

  ngOnInit(): void {

this.service.getAllProducts().subscribe((response) => {
 this.products=response;
 
});

  }

  addToCard(id){
this.service.addToCart(id).subscribe();
  }

}
