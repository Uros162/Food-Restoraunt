import { OrderService } from './../../services/order/order.service';
import { RestaurantService } from './../../services/restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  message:number;
  messageRating:number;
  currentRate=0;
  constructor(private restaurantService:RestaurantService,private orderService:OrderService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.restaurantService.currentMessage.subscribe(message => this.message = message);
  }

  sendMark(){
    var currentRestaurant = this.restaurantService.getRestaurantByID(this.message);
   this.newMessage(this.currentRate);
    currentRestaurant.marks.push(this.currentRate);
    console.log(this.currentRate);
    console.log(currentRestaurant.marks);
  }

  newMessage(messageRating:number) {
    this.orderService.changeMessage(messageRating);
  }

}
