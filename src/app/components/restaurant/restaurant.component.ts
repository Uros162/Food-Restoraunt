import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  message:number;
  listOfCAtegories:Set<string>;
  theVisibleMeals:Array<Meal>;
  currentItemsIncart:Array<CartItem> = [];
  serialNumber:number = 0;
  isAktive:boolean;
  
  constructor(private restaurantsService:RestaurantService ,private authService:AuthenticationService) { }

  ngOnInit(): void {
    console.log(this.message)
    this.restaurantsService.currentMessage.subscribe(message => this.message = message);
    this.listOfCAtegories = this.getListOfCategories(this.message);
    this.theVisibleMeals = this.getMeals(this.message);
    
  }

  getNameOfResturant(id:number){ 
    return this.restaurantsService.getRestaurantByID(id).name;
  }

  getListOfCategories(id:number){
    var listOfCAtegories = new Set(this.restaurantsService.getRestaurantByID(id).meals.map(meal => meal.category));
    return listOfCAtegories;    
  }

  getMeals(id:number){
    return this.restaurantsService.getRestaurantByID(id).meals;
  }

  getMealById(id:number){
    var meal = this.getMeals(this.message).find(meal => meal.mealId == id);

    return meal;
  }

  addItemToCart(id:number){

     var meal = this.getMealById(id);
    

     var itemTOAdd:CartItem = {
      name:meal.name,
      quantity:1,
      totalPrice:meal.price,
      unitPrice:meal.price
     }

     
     this.currentItemsIncart.push(itemTOAdd);
     this.serialNumber = this.currentItemsIncart.length ;
     console.log(itemTOAdd)
  
  }

  removeItemFromCart(index:number){
    this.currentItemsIncart.splice(index,1);
    console.log(this.currentItemsIncart);
  }

  increassQuantityAndPrice(index:number){
   this.currentItemsIncart[index].quantity++;
  this.currentItemsIncart[index].totalPrice+=this.currentItemsIncart[index].unitPrice;
  }

  decreassQuantityAndPrice(index:number){
    if(this.currentItemsIncart[index].quantity > 1){
      this.currentItemsIncart[index].quantity--;
      this.currentItemsIncart[index].totalPrice-=this.currentItemsIncart[index].unitPrice;
    }else{
      this.removeItemFromCart(index);
    }
   
   }
   total(){
     let sum = 0;

     this.currentItemsIncart.forEach(element => {
       sum+=element.totalPrice;
     });

     return sum;
   }

   public search(event:any){
    if(event.target.value == ''){
      this.theVisibleMeals = this.getMeals(this.message);
      return;
    }

    this.theVisibleMeals = this.getMeals(this.message).filter(meal => meal.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
  }

  public filter(category:string){
    
    this.isAktive = true;
    this.theVisibleMeals = this.getMeals(this.message).filter(meal => meal.category.toLocaleLowerCase() == category);
    console.log(this.theVisibleMeals);
   
  }
    
}
