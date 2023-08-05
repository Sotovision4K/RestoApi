import { Router } from "express";
import {  orderSubmitByWaiter, orderSubmittedByCustomer } from "../services/orderServices";



let routes = Router()

routes.get('/gettest', (req, res)=>{
    let fullPrice = 0
    for (let item of req.body.foods){
        fullPrice = fullPrice + item.price
    }

   let fullOrder =  orderSubmittedByCustomer(req.body.foods, fullPrice)
   //databasecode
    res.send(fullOrder)


})


routes.post('/orders/waiter', (req, res)=>{
    let fullPrice = 0
    for (let item of req.body.foods){
        fullPrice = fullPrice + item.price
    }
    let fullOrder = orderSubmitByWaiter(req.body.foods, fullPrice, req.body.tableNumber)
    console.log(fullOrder)
    res.send(fullOrder)
})

export default routes