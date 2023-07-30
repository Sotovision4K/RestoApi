import express from 'express'
import routes from './routes/routes'


let app = express()

app.use(express.json())

app.use('/api/v1/',routes)

 let PORT = 3000

app.listen(PORT,()=>{
    console.log('oli ya estoy escuchando')
})