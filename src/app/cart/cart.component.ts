import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Assuming a service to manage cart data
import { AddressService } from '../address.service'; // Assuming a service to manage addresses
import { Router } from '@angular/router';
import { OrderService } from '../order.service'; // Assuming an order service

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Store cart items
  totalPrice: number = 0; // Store total price
  addresses: string[] = []; // Available addresses
  selectedAddress: string = ''; // Selected address for the order
  newAddress: string = ''; // New address entered by the user
  isNewAddressAdded: boolean = false; // Flag to indicate new address is added

  constructor(
    private cartService: CartService,
    private addressService: AddressService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch cart items and total price from CartService
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();

    // Fetch available addresses from AddressService
    this.addresses = this.addressService.getAddresses();
  }

  // Method to increase the quantity of an item
  increaseQuantity(itemId: number): void {
    this.cartService.increaseQuantity(itemId);
    this.updateCart();
  }

  // Method to decrease the quantity of an item
  decreaseQuantity(itemId: number): void {
    this.cartService.decreaseQuantity(itemId);
    this.updateCart();
  }

  // Method to remove an item from the cart
  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId);
    this.updateCart();

    // Redirect to home if cart is empty
    if (this.cartItems.length === 0) {
      this.router.navigate(['/home']);
    }
  }

  // Method to update cart items and total price
  updateCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // Method to handle adding a new address
  addAddress(): void {
    if (this.newAddress.trim()) {
      this.isNewAddressAdded = true;
    } else {
      alert('Please enter a valid address!');
    }
  }

  // Method to confirm and add the new address
  confirmAddress(): void {
    if (this.newAddress.trim()) {
      this.addressService.addAddress(this.newAddress);
      this.addresses = this.addressService.getAddresses();
      this.selectedAddress = this.newAddress; // Set the newly added address as selected
      this.newAddress = ''; // Clear the input field
      this.isNewAddressAdded = false; // Reset the flag
      alert('Address added and confirmed successfully!');
    }
  }

  // Method to confirm the order and navigate to the Payment component
  confirmOrder(): void {
    if (!this.selectedAddress) {
      alert('Please select an address!');
      return;
    }

    // Assuming you want to pass the order details to the OrderService or navigate to payment page
    const orderDetails = {
      address: this.selectedAddress,
      totalPrice: this.totalPrice,
      cartItems: this.cartItems // Including the cart items
    };

    this.orderService.setOrderDetails(orderDetails); // Store order details in OrderService

    // Redirect to payment page
    this.router.navigate(['/payment']);
  }
}
