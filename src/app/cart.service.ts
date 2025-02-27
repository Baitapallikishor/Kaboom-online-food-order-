import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = []; // Array to store cart items
  private totalPrice: number = 0; // Store the total price

  constructor() { }

  addToCart(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++; // Increment quantity if item already exists
    } else {
      this.cart.push({ ...item, quantity: 1 }); // Add new item with quantity 1
    }

    this.calculateTotalPrice();
  }

  // Get all cart items
  getCartItems(): any[] {
    return this.cart;
  }

  // Increase the quantity of a specific item
  increaseQuantity(itemId: number): void {
    const item = this.cart.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity++;
      this.calculateTotalPrice();
    }
  }

  // Decrease the quantity of a specific item
  decreaseQuantity(itemId: number): void {
    const item = this.cart.find(cartItem => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.calculateTotalPrice();
    } else if (item && item.quantity === 1) {
      this.cart = this.cart.filter(cartItem => cartItem.id !== itemId); // Remove item if quantity is 0
      this.calculateTotalPrice();
    }
  }

  // Method to remove an item from the cart
removeItem(itemId: number): void {
  this.cart = this.cart.filter(cartItem => cartItem.id !== itemId);
  this.calculateTotalPrice();
}


  // Calculate the total price
  calculateTotalPrice(): void {
    this.totalPrice = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  // Get the total price
  getTotalPrice(): number {
    return this.totalPrice;
  }
}
