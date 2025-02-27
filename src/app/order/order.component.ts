import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'; // Adjust this import as per your actual service
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails: any = {};  // Holds the details of the order
  selectedPaymentMethod: string = ''; // Tracks the selected payment method
  paymentMethods: string[] = ['Google Pay', 'PhonePe', 'Paytm', 'UPI', 'Cash on Delivery']; // Available payment methods
  
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    // Initialize order details (This should come from your OrderService or API)
    this.orderDetails = this.orderService.getOrderDetails();
  }

  confirmPayment(): void {
    // Here you could implement logic for confirming the payment.
    if (!this.selectedPaymentMethod) {
      alert('Please select a payment method!');
      return;
    }

    // Simulate payment process or redirect to an actual payment gateway
    alert(`Payment successful via ${this.selectedPaymentMethod}`);
    // After payment, redirect or take further actions (like updating the order status)
    this.router.navigate(['/order-confirmation']);
  }
}
