import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';  // Assuming you have an OrderService to manage order details
import { Router } from '@angular/router';  // For navigation

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  orderDetails: any; // To hold the order details received from the CartComponent
  selectedPaymentMethod: string = ''; // Selected payment method
  paymentMethods: string[] = [
    'Google Pay',
    'PhonePe',
    'Cash on Delivery',
    'Paytm',
    'UPI'
  ]; // Available payment methods

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    // Fetch the order details from OrderService
    this.orderDetails = this.orderService.getOrderDetails();
    if (!this.orderDetails) {
      this.router.navigate(['/cart']); // Redirect to the cart if no order details are available
    }
  }

  // Handle the selection of a payment method
  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

  // Confirm the order and process the payment
  confirmPayment(): void {
    if (!this.selectedPaymentMethod) {
      alert('Please select a payment method!');
      return;
    }
   
    // Here you can implement your payment gateway integration logic (e.g., for Google Pay, PhonePe, etc.)
    // Since this is a mock, we will simulate the payment process.

    alert(`Payment successful using ${this.selectedPaymentMethod}!`);
    alert(`Order confirmed!\n
    Address: ${this.orderDetails.address}\n
    Total Price: ₹${this.orderDetails.totalPrice}\n
    Payment Method: ${this.selectedPaymentMethod}`);

    // After payment, clear the cart and redirect the user
    // Assuming you have a CartService to clear the cart
    this.router.navigate(['/home']);  // Redirecting to home page after payment
  }
}
  