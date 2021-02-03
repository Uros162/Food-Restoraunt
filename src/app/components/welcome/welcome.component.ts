import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  error : any;
  restaurants : Array<Restaurant>;
  visibleRestaurants : Array<Restaurant>;
  message:number; 
  constructor(private restaurantsService:RestaurantService,private router:Router) { }

  ngOnInit(): void {
    this.LoadRestaurants();
  }


  private LoadRestaurants() {
    this.visibleRestaurants  = this.restaurantsService.getRestaurants();
    this.restaurants = this.restaurantsService.getRestaurants();
        
    }

    public search(event:any){
      if(event.target.value == ''){
        this.visibleRestaurants = this.restaurantsService.getRestaurants();
        return;
      }

      this.visibleRestaurants = this.restaurants.filter(restourant => restourant.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase().slice(0.4)));
    }

    newMessage(message:number) {
      this.restaurantsService.changeMessage(message);
    }

    redirectToRstoranById(id:number){
      this.newMessage(id);
      this.router.navigate(['/restaurant']);
    }
}
