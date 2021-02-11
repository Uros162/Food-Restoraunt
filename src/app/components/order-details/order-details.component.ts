import { AuthenticationService } from './../../services/authentication/authentication.service';
import { OrderService } from './../../services/order/order.service';
import { CartItem } from './../../models/cart-item';
import { RestaurantService } from './../../services/restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  currentItemsIncart:Array<CartItem>;
  currentOrder:Order;
  currentRestorauntId:number
  constructor(private restauranrService:RestaurantService,private OrderService:OrderService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.restauranrService.currentItemsInOreder.subscribe(currentItemsIncart => this.currentItemsIncart =currentItemsIncart) ;
    
    this.restauranrService.currentMessage.subscribe(message => this.currentRestorauntId = message)    
    console.log("------------")
    console.log(this.currentItemsIncart);
  }

  total(){
    let sum = 0;

    this.currentItemsIncart.forEach(element => {
      sum+=element.totalPrice;
    });

    return sum;
  }

  order(){
    var maxid: number = 0;
    OrderService.orders.forEach(order => {
      if (maxid < order.orderId) {
        maxid = order.orderId;
      }
    })

    var id = ++maxid;
    
    this.currentOrder = {
      orderId:id,
      customerId:this.authService.currentUser.id,
      restaurantId:this.currentRestorauntId,
      address:"vukija jovica",
      status:Status.IN_PROGRESS,
      meals:[...this.currentItemsIncart],
      timestamp:new Date(),
      price:this.total(),
      mark:5


    }
    console.log("------------");
    console.log(this.currentOrder.meals);

    this.OrderService.addOrder(this.currentOrder);
    this.OrderService.setOrdered(true);
  }

  

}
