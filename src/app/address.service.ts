import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addresses: string[] = [
    'Home - 123 Street, City',
    'Office - 456 Avenue, City',
    'Other - 789 Road, City'
  ];

  getAddresses(): string[] {
    return this.addresses;
  }
  addAddress(newAddress: string): void {
    this.addresses.push(newAddress);
  }

  private address: string = '';  // Example, could be more complex

  constructor() {}

  // Get the current address
  getAddress(): string {
    return this.address;
  }

  // Update the address
  updateAddress(newAddress: string): void {
    this.address = newAddress;
  }
}
