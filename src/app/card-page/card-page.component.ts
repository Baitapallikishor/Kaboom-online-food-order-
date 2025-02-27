import { Component, OnDestroy, OnInit, Query } from '@angular/core';
import { cart } from '../shared/cart';
import { CartService } from '../services/cart.service';
import { cartitem } from '../shared/cartitem';
import { ParseFlags, Parser } from '@angular/compiler';
import { Foods } from '../shared/food';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  private cartItems: any[] = [];
  
  cartservice: any;
  cartService: any;
  totalPrice: any;
  constructor() {}
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); // Get items from the cart
    this.totalPrice = this.cartService.getTotalPrice(); // Calculate total price
  }
  addToCart(food: any): void {
    // Check if the item already exists in the cart
    const existingItem = this.cartItems.find(item => item.id === food.id);
  }
  
  getCartItems() {
    return this.cartItems;
  }
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
  removeFromCart(foodId: number) {
    // Remove item from cart (implement this in CartService if needed)
    this.cartService.removeFromCart(foodId);
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}


  
  /*
  
  cart!: cart;

  constructor(private cartService: CartService) { 
    this.setcart();}

  ngOnInit(): void {
   // Move setcart() logic to ngOnInit
  }

  setcart() {
    this.cart = this.cartService.getcart();
  }

  addToCart(food:Foods): void {
    // Logic to add food to the cart
  }
  removeFromcart(cartitem: cartitem) {
    this.cartService.removeFromcart(cartitem.food.id);
    this.setcart();
  }

  changeQuantity(cartitem: cartitem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartitem.food.id, quantity);
    this.setcart();
  }
}
*/