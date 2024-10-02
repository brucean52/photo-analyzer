export type AppState = {
  openLeftSidebar: boolean;
  openRightSidebar: boolean;
  selectedPhotoIndex: number | null;
  photosArray: any[];
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  setPhotoArrayIndex: (index: number | null, isMobile: boolean) => void;
  addPhoto: (photo: any) => void;
  reset: () => void;
}

export type ExifInfo = {
  make: string;
  model: string;
  orientation: string;
  dateTimeOriginal: string;
  imageHeight: string;
  imageWidth: string;
  software: string;
  exifVersion: string;
  lensMake: string;
  lensModel: string;
  exposureTime: string;
  fNumber: string;
  exposureProgram: string;
  isoSpeedRatings: number;
  shutterSpeedValue: string;
  apertureValue: string;
  brightnessValue: string;
  exposureBiasValue: string;
  maxApertureValue: string;
  subjectDistance: string;
  meteringMode: string;
  flash: string;
  focalLength: string;
  subSecTimeOriginal: string;
  colorSpace: string;
  pixelXDimension: number;
  pixelYDimension: number;
  sensingMethod: string;
  sceneType: string;
  exposureMode: string;
  whiteBalance: string;
  digitalZoomRatio: string;
  focalLengthIn35mmFilm: number;
  sceneCaptureType: string;
  contrast: string;
  saturation: string;
  sharpness: string;
  subjectDistanceRange: string;
  gpsVersionID: string;
  gpsLatitudeRef: string;
  gpsLatitude: number;
  gpsLongitudeRef: string;
  gpsLongitude: number;
  gpsAltitudeRef: string;
  gpsAltitude: string;
  gpsTimeStamp: string;
  gpsImgDirectionRef: string;
  gpsImgDirection: string;
  gpsDateStamp: string;
}

export type PngInfo = {
  orientation: string;
  dateTimeOriginal: string;
  colorSpace: string;
  pixelXDimension: number;
  pixelYDimension: number;
  imageHeight: string;
  imageWidth: string;
  colorType: string;
  compression: string;
  filter: string;
  interlace: string;
}

export type Photo = {
  filename: string;
  src: string;
  vision: any;
  height: number;
  width: number;
  exifInfo?: ExifInfo;
  pngInfo?: PngInfo;
}

export type FileInfo = {
  type: 'exifInfo' | 'pngInfo';
  data: unknown;
}

export type ImageDimensions = {
  width: number;
  height: number;
}
