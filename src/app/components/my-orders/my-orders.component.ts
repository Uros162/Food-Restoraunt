import { OrderService } from './../../services/order/order.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/models/order';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private orderService:OrderService) {

   } 
  
   myOrders = new MatTableDataSource<Order>();
   @ViewChild(MatSort) sort: MatSort;
   public displayedColumns:string[] =  ['status','narudzbina','cena','datum','beleske','ocena'];
  ngOnInit(): void {
    this.myOrders.data =this.orderService.getMyOrders();
  }
 

}
