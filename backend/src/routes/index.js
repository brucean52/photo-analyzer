import { Router } from 'express';
import multer from 'multer';
import { postImage } from '../controllers/index.js';

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
  storage
});

router.post('/image', upload.single('image'), postImage);

export default router
