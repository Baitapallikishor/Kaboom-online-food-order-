import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  

  constructor(private router: Router, private userService: UserService) {}

  isPopupOpen: boolean = false;

  ngOnInit(): void {}

  openpopup1(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }

  onSignupClick(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();

    this.clearErrors();
    let isValid = true;

    if (!name || name.length < 3) {
      this.showError('nameError', 'Name must be at least 3 characters.');
      isValid = false;
    }

    if (!email || !this.isValidEmail(email)) {
      this.showError('emailError', 'Enter a valid email address.');
      isValid = false;
    }

    if (password.length < 6) {
      this.showError('passwordError', 'Password must be at least 6 characters.');
      isValid = false;
    }

    if (isValid) {
      this.userService.updateUserData({ name, email });
      alert('Signup Successful!');
      this.isPopupOpen = false;
      this.router.navigate(['/home']);
    }
  }

  clearErrors(): void {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => (element.textContent = ''));
  }

  showError(id: string, message: string): void {
    const errorElement = document.getElementById(id);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


   show=false;
  username: string = '';
  password: string = '';

  openpopup(){
    this.show=true;
  }
  closepopup(){
    this.show=false;
  }

  signup() {
    console.log('Sign Up clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}



