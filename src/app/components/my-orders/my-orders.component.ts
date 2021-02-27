import { RestaurantService } from './../../services/restaurant/restaurant.service';
import { OrderService } from './../../services/order/order.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/models/order';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  message:number;
  messageRating?:number;
  
  constructor(private restauranrService:RestaurantService,private orderService:OrderService ,private dialog:MatDialog) {

   } 
  
   myOrders = new MatTableDataSource<Order>();
   @ViewChild(MatSort) sort: MatSort;
   public displayedColumns:string[] =  ['status','narudzbina','cena','datum','beleske','ocena'];
  ngOnInit(): void {
    this.myOrders.data =this.orderService.getMyOrders();
    this.orderService.currentMessage.subscribe(messageRating => this.messageRating = messageRating);
  }

  newMessage(message:number) {
    this.restauranrService.changeMessage(message);
  }

  openDialog(id:number,orderNumber:number) {
  this.newMessage(id);
  console.log(id)
  

    const dialogRef = this.dialog.open(RatingComponent);

    dialogRef.afterClosed().subscribe(() => {
     this.rateOrder(orderNumber);
    });
  }

  rateOrder(idOrder:number){
    if(this.messageRating !=null ||this.messageRating !=0 ){
    this.orderService.findMyOrderById(idOrder).mark = this.messageRating;
    
  }else return;
  }

  isOrdered(mark:number){
    if(mark == null || mark == 0){
      return false;
    }

    return true;
  }
 

}
