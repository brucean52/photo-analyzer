import { ExifInfo, PngInfo, Photo } from "../types"

export const HIGHLIGHT_GREEN = '#1bfc06';
export const HIGHLIGHT_BLUE = '#0066cc';

export const defaultExifInfo: ExifInfo = {
  make: '',
  model: '',
  orientation: '',
  dateTimeOriginal: '',
  imageHeight: '',
  imageWidth: '',
  software: '',
  exifVersion: '',
  lensMake: '',
  lensModel: '',
  exposureTime: '',
  fNumber: '',
  exposureProgram: '',
  isoSpeedRatings: 0,
  shutterSpeedValue: '',
  apertureValue: '',
  brightnessValue: '',
  exposureBiasValue: '',
  maxApertureValue: '',
  subjectDistance: '',
  meteringMode: '',
  flash: '',
  focalLength: '',
  subSecTimeOriginal: '',
  colorSpace: '',
  pixelXDimension: 0,
  pixelYDimension: 0,
  sensingMethod: '',
  sceneType: '',
  exposureMode: '',
  whiteBalance: '',
  digitalZoomRatio: '',
  focalLengthIn35mmFilm: 0,
  sceneCaptureType: '',
  contrast: '',
  saturation: '',
  sharpness: '',
  subjectDistanceRange: '',
  gpsVersionID: '',
  gpsLatitudeRef: '',
  gpsLatitude: 0,
  gpsLongitudeRef: '',
  gpsLongitude: 0,
  gpsAltitudeRef: '',
  gpsAltitude: '',
  gpsTimeStamp: '',
  gpsImgDirectionRef: '',
  gpsImgDirection: '',
  gpsDateStamp: '',
}

export const defaultPngInfo: PngInfo = {
  orientation: '',
  dateTimeOriginal: '',
  colorSpace: '',
  pixelXDimension: 0,
  pixelYDimension: 0,
  imageHeight: '',
  imageWidth: '',
  colorType: '',
  compression: '',
  filter: '',
  interlace: '',
}

export const defaultPhoto: Photo = {
  filename: '',
  src: '',
  vision: '',
  height: 0,
  width: 0,
}

export const pngInfoTableRows = [
  {
    name: 'Date and Time Original',
    keyValue: 'dateTimeOriginal',
  },
  {
    name: 'Orientation',
    keyValue: 'orientation',
  },
  {
    name: 'Pixel X Dimension',
    keyValue: 'pixelXDimension',
  },
  {
    name: 'Pixel Y Dimension',
    keyValue: 'pixelYDimension',
  },
  {
    name: 'Image Height',
    keyValue: 'imageHeight',
  },
  {
    name: 'Image Width',
    keyValue: 'imageWidth',
  },
  {
    name: 'Color Space',
    keyValue: 'colorSpace',
  },
  {
    name: 'Color Type',
    keyValue: 'colorType',
  },
  {
    name: 'Compression',
    keyValue: 'compression',
  },
  {
    name: 'Filter',
    keyValue: 'filter',
  },
  {
    name: 'Interlace',
    keyValue: 'interlace',
  },
];

export const exifImageInfoTableRows = [
  {
    name: 'Exif Version',
    keyValue: 'exifVersion',
  },
  {
    name: 'Date and Time Original',
    keyValue: 'dateTimeOriginal',
  },
  {
    name: 'Camera Lens Make',
    keyValue: 'lensMake',
  },
  {
    name: 'Camera Lens Model',
    keyValue: 'lensModel',
  },
  {
    name: 'Orientation',
    keyValue: 'orientation',
  },
  {
    name: 'Image Height',
    keyValue: 'imageHeight',
  },
  {
    name: 'Image Width',
    keyValue: 'imageWidth',
  },
  {
    name: 'Pixel X Dimension',
    keyValue: 'pixelXDimension',
  },
  {
    name: 'Pixel Y Dimension',
    keyValue: 'pixelYDimension',
  },
  {
    name: 'Software',
    keyValue: 'software',
  }
];

export const exifPhotoInfoTableRows = [
  {
    name: 'Aperature',
    keyValue: 'apertureValue',
  },
  {
    name: 'Max Aperture Value',
    keyValue: 'maxApertureValue',
  },
  {
    name: 'Exposure Bias',
    keyValue: 'exposureBiasValue',
  },
  {
    name: 'Exposure Mode',
    keyValue: 'exposureMode',
  },
  {
    name: 'Exposure Program',
    keyValue: 'exposureProgram',
  },
  {
    name: 'Flash',
    keyValue: 'flash',
  },
  {
    name: 'FNumber',
    keyValue: 'fNumber',
  },
  {
    name: 'Focal Length',
    keyValue: 'focalLength',
  },
  {
    name: 'Focal Length in 35mm Film',
    keyValue: 'focalLengthIn35mmFilm',
  },
  {
    name: 'ISO Speed Ratings',
    keyValue: 'isoSpeedRatings',
  },
  {
    name: 'Digital Zoom Ratio',
    keyValue: 'digitalZoomRatio',
  },
  {
    name: 'Subject Distance',
    keyValue: 'subjectDistance',
  },
  {
    name: 'Subject Distance Range',
    keyValue: 'subjectDistanceRange',
  },
  {
    name: 'Metering Mode',
    keyValue: 'meteringMode',
  },
  {
    name: 'Shutter Speed',
    keyValue: 'shutterSpeedValue',
  },
  {
    name: 'White Balance',
    keyValue: 'whiteBalance',
  },
  {
    name: 'Brightness',
    keyValue: 'brightnessValue',
  },
  {
    name: 'Contrast',
    keyValue: 'contrast',
  },
  {
    name: 'Saturation',
    keyValue: 'saturation',
  },
  {
    name: 'Sharpness',
    keyValue: 'sharpness',
  },
  {
    name: 'Sensing Method',
    keyValue: 'sensingMethod',
  },
  {
    name: 'Scene Type',
    keyValue: 'sceneType',
  },
  {
    name: 'Scene Capture Type',
    keyValue: 'sceneCaptureType',
  }
];

export const exifGpsInfoTableRows = [
  {
    name: 'Version ID',
    keyValue: 'gpsVersionID',
  },
  {
    name: 'Date Stamp',
    keyValue: 'gpsDateStamp',
  },
  {
    name: 'Time Stamp',
    keyValue: 'gpsTimeStamp',
  },
  {
    name: 'Latitude',
    keyValue: 'gpsLatitude',
  },
  {
    name: 'Latitude Ref',
    keyValue: 'gpsLatitudeRef',
  },
  {
    name: 'Longitude',
    keyValue: 'gpsLongitude',
  },
  {
    name: 'Longitude Ref',
    keyValue: 'gpsLongitudeRef',
  },
  {
    name: 'Altitude',
    keyValue: 'gpsAltitude',
  },
  {
    name: 'Altitude Ref',
    keyValue: 'gpsAltitudeRef',
  },
  {
    name: 'Image Direction',
    keyValue: 'gpsImgDirection',
  },
  {
    name: 'Image Direction Ref',
    keyValue: 'gpsImgDirectionRef',
  }
];

