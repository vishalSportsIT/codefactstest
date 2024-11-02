import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectToMDb from '../utils/db/db.js';
import studioRoutes from '../api/studio/routes.js';

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
config();

const portNumber=process.env.STUDIO_PORT_NUMBER;
const dbUrl=process.env.MONGODB_URL;

connectToMDb(dbUrl);
app.use('/api/v1/studio',studioRoutes);


app.listen(portNumber,()=>{
    console.log(`server connected on port ${portNumber}`)
})

