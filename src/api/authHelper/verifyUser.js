
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET 

const verifyUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.sendStatus(401); 

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user; 
        next();
    });
};

export default verifyUser;
