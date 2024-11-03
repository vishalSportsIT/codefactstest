import express from 'express';
import { signup, login, refreshToken, getProfile, logout } from './controller.js';
import verifyUser from '../authHelper/verifyUser.js';
import upload from '../middlewares/upload.js';

const router = express.Router();


router.post('/signup', upload.single('profilePic'),signup);

router.post('/login', login);

router.post('/refresh-token', refreshToken);

router.get('/profile', verifyUser, getProfile);
 
router.post('/logout', verifyUser, logout);

export default router;
