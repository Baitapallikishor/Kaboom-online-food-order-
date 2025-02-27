import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  // Array to hold all reviews
  reviews = [
    { user: 'John Doe', rating: 4, comment: 'Great product!' },
    { user: 'Jane Smith', rating: 5, comment: 'I love it!' }
  ];

  // New review data
  newReview = {
    user: '',
    rating: 0,
    comment: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // Method to add a new review
  addReview(): void {
    if (this.newReview.user && this.newReview.comment && this.newReview.rating > 0) {
      this.reviews.push({ ...this.newReview });
      this.newReview = { user: '', rating: 0, comment: '' }; // Reset form
    }
  }
}
