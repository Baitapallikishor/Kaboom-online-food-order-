import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userData = new BehaviorSubject<{ name: string; email: string; bio: string; profileImage: string }>({
    name: '',
    email: '',
    bio: 'This is my bio.',
    profileImage: '/assets/profileimage.jpg',
  });

  userData$ = this.userData.asObservable();

  updateUserData(data: { name: string; email: string; bio?: string; profileImage?: string }): void {
    this.userData.next({ ...this.userData.value, ...data });
  }

  constructor() { }
}
