import { UserModel } from "./user.model";

export class OrderModel {
    orderID: number = 0;
    orderNumber: number = 0;
    gallonsOrdered: number = 0;
    deliveryAddress: string = "";
    deliveryDate: string = "";
    pricePerGallon: number = 0.00;
    totalAmountDue: number = 0.00;
    clientID: number = 0;
}