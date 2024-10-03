# Photo Analyzer

### [Frontend Demo](https://photo-analyzer.netlify.app/)

## Description

A fullstack app that integrates the Google Vision API, and extracts image (Exif) meta data. Built with React, TypeScript, Framer Motion, Node, Express, and Multer.

![Alt text](https://github.com/brucean52/photo-analyzer/blob/master/sample_images/objects.png "objects")
![Alt text](https://github.com/brucean52/photo-analyzer/blob/master/sample_images/upload.png "upload")
![Alt text](https://github.com/brucean52/photo-analyzer/blob/master/sample_images/logos.png "logos")

## Installation and Setup

### 1. Google Vision API service key
Obtain a service key for the Google Vision API. The `/backend/src/config/index.js` file references the key filename as `google-key.json`

### 2. System configuration setup
Create a .env file in the frontend folder using the .env.example file as a reference.

### 3. `npm install` 
Required in the root directory in order to concurrently run both frontend and backend folders.

### 4. `npm run install-all`
Installs the necessary modules for both the frontend and backend directories to run the application.

### `npm start` or `npm run dev`
Runs the app in development mode.
Client: [http://localhost:5173/](http://localhost:5173/)
Server: [http://localhost:3000/](http://localhost:3000/)

### Front End Directory
### `npm run build`
Creates a production build of the app in the dist directory

## References

- [photo-gallery](https://github.com/brucean52/photo-gallery)
- [Google Cloud Vision API](https://cloud.google.com/vision)