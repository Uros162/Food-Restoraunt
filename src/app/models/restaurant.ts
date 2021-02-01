import { Meal } from "./meal";

export class Restaurant {
    
    restaurantId: number;
    name: string;
    restaurantLogo: string;
    description: string;
    mark: number;
    address: string;
    meals: Array<Meal>;
}