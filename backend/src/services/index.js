import fs from 'fs';
import { client } from '../config/index.js';

export const analyzeImage = async (imageBuffer) => {
  const encodedImage = Buffer.from(imageBuffer).toString('base64');
  const request = {
    requests: [
      {
        image: {
          content: encodedImage
        },
        // TODO: Implement more detection types
        features: [
          { type: 'OBJECT_LOCALIZATION' },
          { type: 'LABEL_DETECTION' },
          { type: 'LOGO_DETECTION' },
          { type: 'LANDMARK_DETECTION' },
          // { type: 'TEXT_DETECTION' },
          // { type: 'FACE_DETECTION' },
          // { type: 'SAFE_SEARCH_DETECTION' },
          // { type: 'WEB_DETECTION' },
        ],
      },  
    ],
  };

  try {
    const response = await client.batchAnnotateImages(request);
    return response;

  } catch (error) {
    console.error('Error processing image:', error);
  }
}