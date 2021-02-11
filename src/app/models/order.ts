import { CartItem } from './cart-item';
import { Meal } from "./meal";
import { Restaurant } from "./restaurant";
import { Status } from "./status";

export class Order {
    orderId: number;
    customerId: number;
    restaurantId: number;
    address: string;
    status: Status;
    meals: Array<CartItem>;
    timestamp: Date;
    price: number;
    notice?:string;
    mark: number;
}