
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();
const JWT_SECRET = process.env.JWT_SECRET 

const verifyUser = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send({message:'UnAuthorized'}); 

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send({message:'Your session expired'}); 
        req.user = user; 
        next();
    });
};

export default verifyUser;
