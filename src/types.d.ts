export type orderState = 'Pending' | 'On Prep' | 'Served' | 'Delivered' | 'Complete'



export interface Order {
    orderId? : string,
    orderPlaced : Array<object>,
    date : Date,
    amount : number
    orderType : OrderType
    orderState : orderState
    table : number
}

export type orderToShowCustomer = Pick<Order, 'orderPlaced' | 'amount' | 'date' | 'orderState'>

export type orderToShowWaiter = Pick<Order, 'orderPlaced' | 'amount' | 'orderType' | 'date' | 'orderState' | 'table'>

export type orderFromCounter = Pick<Order, "orderPlaced">

export interface Food {
    title : string,
    price : number,
}