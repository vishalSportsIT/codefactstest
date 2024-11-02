// src/api/user/routes.js
import express from 'express';
import { signup, login, refreshToken, getProfile, logout } from './controller.js';
import verifyUser from '../authHelper/verifyUser.js';

const router = express.Router();


router.post('/signup', signup);

router.post('/login', login);

router.post('/refresh-token', refreshToken);

router.get('/profile', verifyUser, getProfile);
 
router.post('/logout', verifyUser, logout);

export default router;