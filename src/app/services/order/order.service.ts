
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

import { Order } from './../../models/order';
import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/OrderData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  isOrderedValue:boolean;
  constructor(private authService:AuthenticationService) { }
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  static orders:Array<Order> = OrderData.orderData;

  addOrder(order:Order){

    OrderService.orders.push(order);
    console.log(OrderService.orders);
  }

  setOrdered(value:boolean){
    this.isOrderedValue =value;
  }
  isOrdered():boolean{
    return this.isOrderedValue;
  }

  getMyOrders(){
    return OrderService.orders.filter(order=>order.customerId == this.authService.currentUser.id);
  }

  findMyOrderById(id:number){
    return this.getMyOrders().find(order=>order.orderId == id);
  }

  changeMessage(messageRating: number) {
    this.messageSource.next(messageRating)

    
  }


}
