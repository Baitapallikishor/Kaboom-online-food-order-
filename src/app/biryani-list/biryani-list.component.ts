import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/food';

@Component({
  selector: 'app-biryani-list',
  templateUrl: './biryani-list.component.html',
  styleUrls: ['./biryani-list.component.css']
})
export class BiryaniListComponent implements OnInit {
  biryaniFoods: Foods[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.biryaniFoods = this.foodService.getBiryaniFoods();
  }
}
