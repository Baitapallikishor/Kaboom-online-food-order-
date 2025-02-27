import { Injectable } from '@angular/core';
import { cart } from '../shared/cart';
import { Foods } from '../shared/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Assuming `Cart` and `CartItem` are defined with the necessary properties
  private cart: cart = new cart();

  // Adds a food item to the cart. If already in cart, increases quantity.
  addtocart(food: Foods): void {
    let cartitem = this.cart.items.find(item => item.food.id === food.id);
    
    if (cartitem) {
      // If the item is already in the cart, increase quantity by 1
      this.changeQuantity(food.id, cartitem.quantity + 1);
      return;
    }
    
    // If not in the cart, create a new cart item and add to cart
    //this.cart.items.push(new cartitem(food, 1));
  }

  // Removes a food item from the cart by its ID
  removeFromcart(foodid: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodid);
  }

  // Changes the quantity of a food item in the cart
  changeQuantity(foodid: number, quantity: number): void {
    let cartitem = this.cart.items.find(item => item.food.id === foodid);
    if (!cartitem) return;

    // Set the new quantity
    cartitem.quantity = quantity;
  }

  // Gets the current cart object
  getcart(): cart {
    return this.cart;
  }
}
