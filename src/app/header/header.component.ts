import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 /* constructor(private router: Router) {}
 
  goTosetting() {
    this.router.navigate(['/setting']);  // navigate to the setting Page
  }

  */

  isOpen = false;
  constructor(private router: Router) {}

  togglePopup(): void {
    this.isOpen = !this.isOpen;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    // Add navigation logic here if needed
    this.togglePopup(); // Close popup after navigation
  }

}
