import { Foods } from "./food";

export class cartitem{
    price: any;
    constructor(food:Foods){
        this.food=food;
    
    }
    food:Foods;
    quantity:number=1;
    getprice():Number{
       return this.food.price *  this.quantity;
    }

}