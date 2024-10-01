import { Router } from 'express';
import multer from 'multer';
import { postImage } from '../controllers/index.js';

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/image', upload.single('image'), postImage);

export default router
