import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    
  profileImageUrl: string = 'assets/default-profile.png'; // Default profile image
 

  profileData = { name: '', email: '', bio: '', profileImage: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userData$.subscribe((data) => {
      this.profileData = data;
    });
  }
  isEditProfile: boolean = false;

  onEditProfile(): void {
    this.isEditProfile = true; // Show edit modal
  }

  saveProfile(): void {
    // Save the profile changes
    this.isEditProfile = false; // Hide edit modal
  }

  cancelEdit(): void {
    this.isEditProfile = false; // Cancel editing
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageUrl = reader.result as string; // Update profile image
      };
      reader.readAsDataURL(input.files[0]);
    }
  }


  


}
