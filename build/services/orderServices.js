"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSubmitByWaiter = exports.orderSubmittedByCustomer = exports.OrderType = void 0;
var OrderType;
(function (OrderType) {
    OrderType[OrderType["On Site"] = 0] = "On Site";
    OrderType[OrderType["Delivery"] = 1] = "Delivery";
})(OrderType || (exports.OrderType = OrderType = {}));
const orderSubmittedByCustomer = (foods, full_price) => {
    let order = {};
    order.amount = full_price;
    order.orderPlaced = foods;
    order.date = new Date();
    order.orderState = "On Prep";
    order.orderId = "1";
    order.orderType = OrderType.Delivery;
    return order;
};
exports.orderSubmittedByCustomer = orderSubmittedByCustomer;
const orderSubmitByWaiter = (foods, full_price, tableNumber) => {
    let order = {};
    order.amount = full_price;
    order.date = new Date();
    order.orderPlaced = foods;
    order.orderType = OrderType["On Site"];
    order.table = tableNumber;
    return order;
};
exports.orderSubmitByWaiter = orderSubmitByWaiter;
