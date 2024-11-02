
import User from './model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET 
const JWT_EXPIRATION = '1h'; 
const REFRESH_TOKEN_EXPIRATION = '7d'; 

const createTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
    return { accessToken, refreshToken };
};


export const signup = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
};


export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const { accessToken, refreshToken } = createTokens(user);
    user.refreshToken = refreshToken; 
    await user.save();
    
    res.json({ accessToken, refreshToken });
};


export const refreshToken = async (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    
    const user = await User.findOne({ refreshToken: token });
    if (!user) return res.sendStatus(403); 
    
    jwt.verify(token, JWT_SECRET, (err) => {
        if (err) return res.sendStatus(403);
        
        const newAccessToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
        res.json({ accessToken: newAccessToken });
    });
};


export const getProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select('-password -refreshToken');
    res.json(user);
};


export const logout = async (req, res) => {
    const { token } = req.body;
    const user = await User.findOne({ refreshToken: token });
    if (user) {
        user.refreshToken = null; 
        await user.save();
    }
    res.sendStatus(204);
};
