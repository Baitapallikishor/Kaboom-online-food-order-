import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
/*  private orderDetails: any = null;

  constructor() { }

  // Set the order details
  setOrderDetails(details: any): void {
    this.orderDetails = details;
  }

  // Get the order details
  getOrderDetails(): any {
    return this.orderDetails;
  }
*/

private orderDetails: any;

private orderDetailsSource = new BehaviorSubject<any>(null);
orderDetails$ = this.orderDetailsSource.asObservable();

constructor() {}

setOrderDetails(orderDetails: any): void {
  this.orderDetails = orderDetails;
}

// Get order details
getOrderDetails(): any {
  return this.orderDetails;
}

}
