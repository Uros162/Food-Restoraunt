import { CartItem } from './../../models/cart-item';

import { Restaurant } from '../../models/restaurant';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getRestaurants } from 'src/app/data/restaurants';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  private messageSource = new BehaviorSubject(0);
  private messageSourceRestorant = new BehaviorSubject([]);
  
  
  currentMessage = this.messageSource.asObservable();
  currentItemsInOreder = this.messageSourceRestorant.asObservable();
 
 

  

  
  getRestaurants():Restaurant[]{
    return RestaurantService.dumyList;
  }

  getRestaurantByID(id:number){
    return RestaurantService.dumyList.find(res=>res.restaurantId == id);
  }

  changeMessage(message: number) {
    this.messageSource.next(message)

    
  }

  showOrderDetails(currentItemsIncart:Array<CartItem>){
    this.messageSourceRestorant.next(currentItemsIncart);
  }

  

  static dumyList: Array<Restaurant> = getRestaurants();

}
