import express from 'express';
import { getStudios, addStudio, getStudioById, updateStudio } from './controller.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get('/studios', getStudios);

router.post('/studios', upload.single('image'), addStudio);

router.get('/studios/:id', getStudioById);

router.put('/studios/:id', updateStudio);

export default router;
