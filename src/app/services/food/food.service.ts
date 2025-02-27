import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { tag } from 'src/app/shared/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:Number):Foods{
    return this.getAll().find(food => food.id ==id)!
  }

  getAllFoodByTag(tag:string):Foods[]{
     
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

   /* 
    if(tag== 'All')
      return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag))
  }
    */
   getAllTag():tag[]{
      return[
        { name:'All',count:14},
        { name:'fastfood',count:4},
        { name:'pizza',count:24},
        { name:'lunch',count:4},
        { name:'SlowFood',count:4},
        { name:'Humburger',count:4},
        { name:'Fry',count:4},
        { name:'soup',count:4}
       ]
   }
  getAll():Foods[]{
    return[
  {
      id:1,
      name:'Potato Curry',
      price:20,
     cookTime:'10-20',
      favorite:false,
      oriigins:['italy'],
      star:2.5,
      imageUrl:'/assets/img2.jpg',
      tags:['fastfood','pizza','lunch'],

  },

  {


    id:2,
    name:'veg noodles',
    price:70,
   cookTime:'10-20',
    favorite:false,
    oriigins:['india'],
    star:4.5,
    imageUrl:'/assets/img3.jpg',
    tags:['fastfood','pizza','lunch'],

  },

  {
    id:3,
      name:'Pinner sweet',
      price:150,
     cookTime:'10-20',
      favorite:false,
      oriigins:['italy','punjab'],
      star:4.5,
      imageUrl:'/assets/img4.jpg',
      tags:['fastfood','pizza','lunch'],

  },
  {

  

        id:4,
      name:'Tomato Dal',
      price:40,
     cookTime:'10-20',
      favorite:false,
      oriigins:['hydrabad'],
      star:4.5,
      imageUrl:'/assets/img5.jpg',
      tags:['fastfood','pizza','lunch'],


  },

  {
      
  id:5,
  name:'egg omlete ',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['newdellhi'],
  star:5,
  imageUrl:'/assets/img6.jpg',
  tags:['fastfood','pizza','lunch'],

},

  {

    
  id:6,
  name:'noodles',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['srikakulam'],
  star:4.5,
  imageUrl:'/assets/img7.jpg',
  tags:['fastfood','pizza','lunch'],

  },

  {
    
  id:50,
  name:'Chicken lollipop',
  price:10,
 cookTime:'10-20',
  favorite:false,
  oriigins:['palasa'],
  star:3,
  imageUrl:'/assets/img8.jpg',
  tags:['fastfood','pizza','lunch'],



  },


  {

    
  id:8,
  name:'Chicken Fry Curry',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['tekkali'],
  star:4.5,
  imageUrl:'/assets/img9.jpg',
  tags:['fastfood','pizza','lunch'],


     
  },

{
  id:9,
  name:'Chicken Curry',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['pundi'],
  star:4.5,
  imageUrl:'/assets/img9.jpg',
  tags:['fastfood','pizza','lunch'],
},
{
id:10,
name:'Chicken Rice',
price:150,
cookTime:'10-20',
favorite:false,
oriigins:['rakhamundry'],
star:4.5,
imageUrl:'/assets/img10.jpg',
tags:['fastfood','pizza','lunch'],


},
{
  id:11,
  name:'Panner Curry',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['godavari'],
  star:4.5,
  imageUrl:'/assets/img11.jpg',
  tags:['fastfood','pizza','lunch'],


     
},

{

  id:12,
  name:'chicken Barger',
  price:40,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/img13.jpg',
  tags:['fastfood','pizza','lunch'],


     
},
//stop
{

  id:13,
  name:'eggcurry',
  price:20,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggcurry2.jpg',
  tags:['fastfood','pizza','lunch'],


     
},

{

  id:14,
  name:'eggcurry',
  price:25,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggcurry1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:15,
  name:'eggboil',
  price:10,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggbol.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:16,
  name:'eggcutting',
  price:10,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggcut.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:17,
  name:'eggomelet',
  price:20,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggomelet.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:18,
  name:'eggomelet',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggomelet2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:19,
  name:'eggomelet',
  price:25,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggomeltte.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:19,
  name:'eggbread',
  price:40,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggbread2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:19,
  name:'eggbread',
  price:20,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/eggbread3.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:20,
  name:'chicken Dum Biryani',
  price:250,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken Dum biryani1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:21,
  name:'chicken Dum Biryani',
  price:120,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken Dum biryani2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:22,
  name:'chicken soup',
  price:150,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken soup.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:23,
  name:'chicken soup',
  price:220,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chickensoup1.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:24,
  name:'chicken lalipop',
  price:200,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chickenlalipop1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:25,
  name:'chicken lalipop',
  price:170,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chickenlalipop2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:26,
  name:'chicken lalipop',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chickenlalipop3.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:27,
  name:'chicken sandwich',
  price:130,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chickensanwish.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:28,
  name:'chicken wings',
  price:150,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chickenwings.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:24,
  name:'chicken fry pice',
  price:120,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken frypice.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:25,
  name:'fish fry',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/fish fry.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:26,
  name:'fish curry',
  price:130,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/fishcurry.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:27,
  name:'fish curry',
  price:120,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/fishcurry1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:28,
  name:'france',
  price:180,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/france1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:29,
  name:'france',
  price:200,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/france fry.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:30,
  name:'france',
  price:150,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/france.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:31,
  name:' chicken fried rice',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken fried rice.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:32,
  name:' chicken fried rice',
  price:130,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken fried rice1.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:33,
  name:' Rice ',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/rice.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:34,
  name:' egg fried Rice ',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/egg fried rice.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:35,
  name:' egg fried Rice ',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/egg fried rice1.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:36,
  name:' Curd Rice ',
  price:40,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/curd rice.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:37,
  name:' mutton curry ',
  price:180,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/muttoncurry.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:38,
  name:' mutton curry ',
  price:200,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/muttoncurry1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:37,
  name:' mutton curry ',
  price:250,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/muttoncurry2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:38,
  name:' mutton Biryani ',
  price:250,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/mutton biryani.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:37,
  name:' mutton biryani ',
  price:130,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/mutton biryani1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:37,
  name:' mutton curry ',
  price:120,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/muttoncurry2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:38,
  name:'panner curry (veg)  ',
  price:50,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/panner curry.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:39,
  name:' panner curry(veg)',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/panner curry1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:40,
  name:' potato curry(veg)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/potato curry.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:41,
  name:' potato fry(veg)',
  price:40,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/potato fry.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:41,
  name:'gongura panner curry (veg)',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/gongoora panner curry.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:42,
  name:' Idly(tiffin)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/idly.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:43,
  name:' Idly vada(tiffin)',
  price:40,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/idly vada.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:44,
  name:' idly sambar(tiffin)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/idly.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:45,
  name:' masala Dosa(tiffin)',
  price:25,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/masala Dosa.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:46,
  name:' plane Dosa(tiffin)',
  price:20,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/plane dosa.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:47,
  name:' onion Dosa(tiffin)',
  price:25,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/onion dosa.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:48,
  name:' vada(tiffin)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/vada.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:49,
  name:'puri (tiffin)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/puri.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:50,
  name:' puri potato curry(tiffin)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/puri potato curry.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:51,
  name:' bonda(tiffin)',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/bonda.jpg',
  tags:['fastfood','pizza','lunch'],
},

/* cake items */
{
  id: 52,
  name: 'Chocolate Cake',  
  price: 350,  
  cookTime: '10-20',
  favorite: false,
  oriigins: ['Italy'],
  star: 4.5,
  imageUrl: '/assets/chocolate cake.jpg', 
  tags: ['fastfood', 'pizza', 'lunch'],
},
{

  id:53,
  name:'chocolate cake',
  price:370,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chocolate-cake.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:54,
  name:'chocolate cake',
  price:370,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chocolate cake2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:55,
  name:'chocolate cake',
  price:400,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chocolate-cake3.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:56,
  name:'chocolate cake',
  price:500,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chocolate cake4.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:57,
  name:'Dream Girl Eggless Cake',
  price:1200,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake5.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:58,
  name:'Vanillascotch',
  price:350,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake3.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:59,
  name:'Pineapple Cake,',
  price:300,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake11.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:60,
  name:'Butterscotch Eggless Cake',
  price:600,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:61,
  name:'Butterscotch Eggless Cake',
  price:450,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake4.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:62,
  name:'Bluberry Eggless Cake',
  price:1000,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake10.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:63,
  name:'Red Velvet',
  price:800,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake8.jpg',
  tags:['fastfood','pizza','lunch'],
},




{

  id:64,
  name:'Vanillascotch',
  price:600,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/cake6.jpg',
  tags:['fastfood','pizza','lunch'],
},
  /*------Rools--*/
{

  id:65,
  name:'Chicken Roll',
  price:180,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken Roll.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:66,
  name:'Chicken Roll',
  price:200,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken Rool.jpeg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:67,
  name:'veg Roll',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/veg Rool.jpeg',
  tags:['fastfood','pizza','lunch'],
},
/*pizza*/
{

  id:68,
  name:'Pizza chicken',
  price:250,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/pizza (chicken).jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:69,
  name:'Pizza Veg',
  price:170,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/pizza veg.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:70,
  name:'Pizza veg',
  price:170,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/pizza veg1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:71,
  name:'Pizza chicken',
  price:250,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/pizza chicken.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:72,
  name:'Pizza Mutton',
  price:300,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/pizza mutton.jpg',
  tags:['fastfood','pizza','lunch'],
},
/*mundi*/
{

  id:73,
  name:'Bahubali Thali',
  price:1200,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/bahubali thali.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:74,
  name:'Bahubali Thali',
  price:1250 ,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/bahubali thali1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:75,
  name:'Bahubali thali',
  price:1400,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/bahubali thali2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:76,
  name:'Chicken Mundi',
  price:900,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken mandi.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:77,
  name:'Chicken Mundi',
  price:1000,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/chicken mandi.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:78,
  name:'Bucket Biryani',
  price:450,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/bucket Biryani1.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:79,
  name:'Bucket Biryani',
  price:600,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/bucket Biryani.jpg',
  tags:['fastfood','pizza','lunch'],
},
/*sweets*/
{

  id:80,
  name:'Gulab Jam',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/gulab jam.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:81,
  name:'Gulab Jam',
  price:130,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/gulab jam1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:82,
  name:'Rasugulla',
  price:150,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/rasugulla.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:83,
  name:'Rasugulla',
  price:180,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/rasugulla1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:84,
  name:'Kaju Katli',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/Kaju Katli.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:85,
  name:'Jalebi',
  price:50,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/jalebi.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:86,
  name:'Jalebi',
  price:50,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/jalebi1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:87,
  name:'Ldoo',
  price:120,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/ladoo.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:88,
  name:'Ladoo',
  price:120,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/ladoo1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:89,
  name:'Kaju Pista',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/kaju pista.jpg',
  tags:['fastfood','pizza','lunch'],
},


{

  id:90,
  name:'Kaju Pista',
  price:100,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/kaju pista1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:91,
  name:'Coca Cola Drink ',
  price:20,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/Coca Cola Drink Bottle.jpg',
  tags:['fastfood','pizza','lunch'],
},
{

  id:92,
  name:'Ice Cream',
  price:50,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/ice cream3.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:93,
  name:'Ice Cream',
  price:30,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/ice cream2.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:92,
  name:'Ice Cream',
  price:70,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/ice creame1.jpg',
  tags:['fastfood','pizza','lunch'],
},

{

  id:92,
  name:'Ice Cream',
  price:40,
 cookTime:'10-20',
  favorite:false,
  oriigins:['italy'],
  star:4.5,
  imageUrl:'/assets/Ice Cream.jpg',
  tags:['fastfood','pizza','lunch'],
},




 



























      /*
      '/assets/img2.jpg',
      '/assets/img3.jpg',
      '/assets/img4.jpg',
      '/assets/img5.jpg',
      '/assets/img6.jpg',
      '/assets/img8.jpg',
      '/assets/img9.jpg',
      '/assets/img10.jpg',
      '/assets/img11.jpg',
      '/assets/imh12.jpg',
      '/assets/img13.jpg',
      '/assets/img14.jpg',
    
*/
    ];





    

    


    
  }


  getBiryaniFoods(): Foods[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes('biryani'));
  }


}
