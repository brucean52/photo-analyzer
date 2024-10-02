import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { analyzeImage } from '../services/index.js';

export const postImage = async (req, res) => {
  try {
    if (req.file) {
      const [output] = await analyzeImage(req.file.buffer);
      res.json(output.responses[0]);
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send('Error receiving image file. No file uploaded.');
    }   
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({
        error: getReasonPhrase(StatusCodes.BAD_REQUEST)
      });
  }
}