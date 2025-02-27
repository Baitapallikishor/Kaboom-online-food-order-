import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent  implements OnInit{
food!:Foods;


  
constructor(private activatedRouter:ActivatedRoute, private foodService:FoodService , private cartService: CartService, private router: Router 
){}
 
ngOnInit(): void {
  this.activatedRouter.params.subscribe((params)=>{
    if(params['id'])
      this.food =this.foodService.getFoodById(params['id'])
  });
   
 }
 
 addToCart(): void {
  this.cartService.addToCart(this.food); // Add the food item to the cart
  this.router.navigate(['/cart']); // Navigate to the Cart Component
}
}
