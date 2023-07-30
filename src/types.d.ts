export type orderType = 'On site' | 'Delivery'
export type orderState = 'Pending' | 'On Prep' | 'Served' | 'Delivered' | 'Complete'

export interface Order {
    orderId? : string,
    orderPlaced : Array<string>,
    date : Date,
    amount : number
    orderType : orderType
    orderState : orderState
    table : number
}

export type orderToShowCustomer = Pick<Order, 'orderPlaced' | 'amount' | 'date' | 'orderState'>

export type orderToShowWaiter = Pick<Order, 'orderPlaced' | 'amount' | 'orderType' | 'date' | 'orderState' | 'table'>


export interface Food {
    title : string,
    price : number,
}