import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  // Menu items list
  menuItems = [
    { label: 'Activity', link: '/activity' },
    { label: 'Reviews', link: '/review', isReviewButton: true },
    { label: 'Photos', link: '/photos' },
    { label: 'Followers', link: '/followers' },
    { label: 'Recently Viewed', link: '/recently-viewed' },
    { label: 'Online Ordering', link: '/order', isOrderButton: true },
    { label: 'My Addresses', link: '/my-addresses' },
    { label: 'Payments', link: '/payments' },
    { label: 'Manage Cards', link: '/manage-cards' },
    { label: 'Table Booking', link: '/table-booking' },
    { label: 'Your Bookings', link: '/your-bookings' },
    { label: 'Account Settings', link: '/account-settings', isAccountSettingsButton: true },
    { label: 'Delete Account', link: '/delete-account' }
  ];
  
  // Boolean flags to control the visibility of components
  showReviewComponent = false;
  showOrderComponent = false;
  showAccountSettingsComponent = false;

  // Method to toggle the Review component visibility
  toggleReviewComponent() {
    this.showReviewComponent = !this.showReviewComponent;
    this.showOrderComponent = false; // Hide order component if showing review
  }

  // Method to toggle the Online Ordering component visibility
  toggleOrderComponent() {
    this.showOrderComponent = !this.showOrderComponent;
    this.showReviewComponent = false; // Hide review component if showing order
  }

  toggleAccountSettingsComponent() {
    this.showAccountSettingsComponent = !this.showAccountSettingsComponent;
    this.showReviewComponent = false; // Hide other sections
    }
}
