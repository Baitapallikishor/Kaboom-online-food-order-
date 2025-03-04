import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/food';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {










  
  food:Foods[]=[];
   constructor(private fs:FoodService, private router:ActivatedRoute){

   }
   ngOnInit(): void {

    this.router.params.subscribe(params =>{
      if(params['searchItem'])
        this.food=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if(params['tag'])
      this.food=this.fs.getAllFoodByTag(params['tag'])
    else
    this.food=this.fs.getAll();
     
   })
}




// Selected food item
selectedFood: any;

// Function to handle food selection
selectFood(food: any) {
  this.selectedFood = food;
}

getStars(star: number) {
  const fullStars = Math.floor(star);
  const halfStar = star % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return Array(fullStars).fill('full').concat(
    Array(halfStar).fill('half'),
    Array(emptyStars).fill('empty')
  );
}



   

}