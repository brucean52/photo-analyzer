import vision from '@google-cloud/vision';

export const client = new vision.ImageAnnotatorClient({
  keyFilename: './google-key.json'
});
