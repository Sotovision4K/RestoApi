import { Order, orderToShowWaiter } from "../types"

export enum OrderType {
    "On Site",
    "Delivery"
}

export const orderSubmittedByCustomer = (foods : Array<object>, full_price : number) =>{
    let order = <Order>{}
    order.amount  = full_price
    order.orderPlaced = foods
    order.date = new Date()
    order.orderState = "On Prep"
    order.orderId = "1"
    order.orderType = OrderType.Delivery
    return order
}

export const orderSubmitByWaiter = (foods : Array<object>, full_price : number, tableNumber: number) =>{
    let order = <orderToShowWaiter>{}
    order.amount = full_price
    order.date = new Date()
    order.orderPlaced = foods
    order.orderType =OrderType["On Site"]
    order.table = tableNumber
    return order
}


