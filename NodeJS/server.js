import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { payslipRoutes } from './routes/payslip.routes.js'

const app = express()
app.use(express.json());

app.listen(5100, () => {
    console.log("Server started");
});

payslipRoutes(app)

app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173',
  }))

mongoose.connect('');  

const db=mongoose.connection;
db.on('open',()=>{
    console.log('Connection to database successful');
})
db.on('error',()=>{
    console.log("Connection with database failed.")
})
