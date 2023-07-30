import { Router } from "express";


let routes = Router()


routes.get('/gettest', (_req, res)=>{
    res.send('oli')
})

export default routes