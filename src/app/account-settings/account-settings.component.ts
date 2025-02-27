import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {
  // Menu items for navigation
  menuItems = [
    { label: 'Update Profile', isProfileButton: true },
    { label: 'Change Password', isPasswordButton: true },
    { label: 'Delete Account', isDeleteButton: true }
  ];

  // Flags to toggle sections
  showProfileComponent = false;
  showPasswordComponent = false;
  showDeleteAccountComponent = false;

  // Mock user data
  user = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    phone: '1234567890'
  };

  // Password change model
  passwords = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  // Toggle the "Update Profile" section
  toggleProfileComponent() {
    this.showProfileComponent = !this.showProfileComponent;
    this.showPasswordComponent = false;  // Hide other sections
    this.showDeleteAccountComponent = false;
  }

  // Toggle the "Change Password" section
  togglePasswordComponent() {
    this.showPasswordComponent = !this.showPasswordComponent;
    this.showProfileComponent = false;  // Hide other sections
    this.showDeleteAccountComponent = false;
  }

  // Toggle the "Delete Account" section
  toggleDeleteAccountComponent() {
    this.showDeleteAccountComponent = !this.showDeleteAccountComponent;
    this.showProfileComponent = false;  // Hide other sections
    this.showPasswordComponent = false;
  }

  // Method to handle profile update
  updateProfile() {
    console.log('Profile updated:', this.user);
    alert('Profile updated successfully!');
  }

  // Method to handle password change
  changePassword() {
    if (this.passwords.newPassword !== this.passwords.confirmPassword) {
      alert('New password and confirmation password do not match!');
      return;
    }

    console.log('Password changed:', this.passwords);
    alert('Password changed successfully!');
  }

  // Method to handle account deletion
  deleteAccount() {
    const confirmDelete = confirm('Are you sure you want to delete your account?');
    if (confirmDelete) {
      console.log('Account deleted');
      alert('Account deleted successfully!');
    }
  }
}
