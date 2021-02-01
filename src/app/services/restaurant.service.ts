
import { Restaurant } from './../models/restaurant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  static dumyList: Array<Restaurant> =[
    {
      restaurantId:1,
      name:"Mc donalds",
      restaurantLogo : "../../../assets/images/McDonalds_Usce-1-1s.jpg",
      description:"mek ooooo",
      mark: 5,
      address:"husiniskih rudara",
      meals:[
        {mealId:1,
          name:"hamburger",
          description:"lepo",
          category:"brza hrana",
          mealPicture:"../../",
          price:50
        
        }
      ]

    },
    {
      restaurantId:2,
      name:"Lesko Zar",
      restaurantLogo : "../../../assets/images/McDonalds_Usce-1-1s.jpg",
      description:"mek ooooo",
      mark: 5,
      address:"husiniskih rudara",
      meals:[
        {mealId:1,
          name:"hamburger",
          description:"lepo",
          category:"brza hrana",
          mealPicture:"../../",
          price:50
        
        }
      ]

    },
    {
      restaurantId:3,
      name:"Big pizaa",
      restaurantLogo : "../../../assets/images/McDonalds_Usce-1-1s.jpg",
      description:"mek ooooo",
      mark: 5,
      address:"husiniskih rudara",
      meals:[
        {mealId:1,
          name:"hamburger",
          description:"lepo",
          category:"brza hrana",
          mealPicture:"../../",
          price:50
        
        }
      ]

    },{
      restaurantId:4,
      name:"Karibik",
      restaurantLogo : "../../../assets/images/McDonalds_Usce-1-1s.jpg",
      description:"mek ooooo",
      mark: 5,
      address:"husiniskih rudara",
      meals:[
        {mealId:1,
          name:"hamburger",
          description:"lepo",
          category:"brza hrana",
          mealPicture:"../../",
          price:50
        
        }
      ]

    }

    
  ]

  
  getRestaurants():Restaurant[]{
    return RestaurantService.dumyList;
  }

  getRestaurantByID(id:number){
    return RestaurantService.dumyList.find(res=>res.restaurantId == id);
  }

  
}
