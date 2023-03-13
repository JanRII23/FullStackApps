export class UserModel{
    userId : number = 0;
    userFirstname : string = "";
    userLastname : string = "";
    userAddressOne: string = "";
    userCity: string = "";
    userState: string = "";
    userZip: number = 0;
  
}

export class OrderModel{
    orderID : number = 0;
    orderNumber : number = 0;
    gallonsOrdered: number = 0;
    deliveryAddress: string = "";
    deliveryDate: string = "";
    pricePerGallon : number = 0;
    totalAmountDue : number = 0;
    userClientID: number = 0;
}