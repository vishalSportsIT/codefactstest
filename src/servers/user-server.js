import express from 'express';
import cors from 'cors';
import connectToMDb from '../utils/db/db.js';
import { config } from 'dotenv';
import userRoutes from '../api/user/routes.js';


config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const portNumber = process.env.USER_PORT_NUMBER;
const dbUrl=process.env.MONGODB_URL;

connectToMDb(dbUrl);
app.use('/api/v1/user',userRoutes);

app.listen(portNumber,()=>{
    console.log(`server connected on port ${portNumber}`)
})

