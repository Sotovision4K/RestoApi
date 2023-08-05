"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderServices_1 = require("../services/orderServices");
let routes = (0, express_1.Router)();
routes.get('/gettest', (req, res) => {
    let fullPrice = 0;
    for (let item of req.body.foods) {
        fullPrice = fullPrice + item.price;
    }
    let fullOrder = (0, orderServices_1.orderSubmittedByCustomer)(req.body.foods, fullPrice);
    //databasecode
    res.send(fullOrder);
});
routes.post('/orders/waiter', (req, res) => {
    let fullPrice = 0;
    for (let item of req.body.foods) {
        fullPrice = fullPrice + item.price;
    }
    let fullOrder = (0, orderServices_1.orderSubmitByWaiter)(req.body.foods, fullPrice, req.body.tableNumber);
    res.send(fullOrder);
});
exports.default = routes;
