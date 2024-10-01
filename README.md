# Photo Analyzer

## Description

A fullstack app that integrates the Google Vision API, and extracts image meta data. Built with React, TypeScript, and Framer Motion.

![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/objects.png "objects")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/upload.png "upload")

## Installation and Setup

In the project directory, you can run:

### 2. System configuration setup
Create a .env file in the frontend folders using the .env.example file.
Obtain a service key for the Google Vision API. The `/backend/src/config/index.js` references the key filename as `google-key.json`

### 3. `npm install` 
Required in the root directory in order to use the below npm commands concurrently for both frontend and backend folders.

### 4. `npm run install-all`
Installs the necessary modules for both the frontend and backend directories to run the application.

### `npm start` or `npm run dev`
Runs the app in development mode.
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

### `npm run build`
Creates a production build of the app in the dist directory

## References

- [photo-gallery](https://github.com/brucean52/photo-gallery)
- [Google Cloud Vision API](https://cloud.google.com/vision)