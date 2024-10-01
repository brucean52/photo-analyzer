import { useCallback, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import ExifReader from 'exifreader';
import { IconLoader2, IconAlertCircle } from '@tabler/icons-react';
import visionIcon from '../../assets/cloud_vision_api.svg';
import { useAppStore } from '../../store/UseAppStore';
import { FileInfo, ImageDimensions } from '../../types';
import styles from './ImageUpload.module.css';

const ImageUpload = () => {
  const { openLeftSidebar, addPhoto, setPhotoArrayIndex } = useAppStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    const formData = new FormData();
    formData.set('image', file);

    const readFile = async (file: File): Promise<FileInfo> => {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onabort = () => reject('file reading was aborted');
        reader.onerror = () => reject('file reading has failed');
        reader.onload = async () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const tags = await ExifReader.load(arrayBuffer, {async: true});
    
          if (tags['FileType'].value === 'png') {
            const pngData = {
              orientation: tags['Orientation']?.description || '',
              dateTimeOriginal: tags['DateTimeOriginal']?.description || '',
              colorSpace: tags['ColorSpace']?.description || '',
              pixelXDimension: tags['PixelXDimension']?.value || 0,
              pixelYDimension: tags['PixelYDimension']?.value || 0,
              imageHeight: tags['Image Height']?.description || '',
              imageWidth: tags['Image Width']?.description || '',
              colorType: tags['Color Type']?.description || '',
              compression: tags['Compression']?.description || '',
              filter: tags['Filter']?.description || '',
              interlace: tags['Interlace']?.description || '',
            }
            resolve({ type: 'pngInfo', data: pngData })
          } else {
            const exifData = {
              make: tags['Make']?.description || '',
              model: tags['Model']?.description || '',
              orientation: tags['Orientation']?.description || '',
              dateTimeOriginal: tags['DateTimeOriginal']?.description || '',
              imageHeight: tags['Image Height']?.description || '',
              imageWidth: tags['Image Width']?.description || '',
              software: tags['Software']?.description || '',
              exifVersion: tags['ExifVersion']?.description || '',
              lensMake: tags['LensMake']?.description || '',
              lensModel: tags['LensModel']?.description || '',
              exposureTime: tags['ExposureTime']?.description || '',
              fNumber: tags['FNumber']?.description || '',
              exposureProgram: tags['ExposureProgram']?.description || '',
              isoSpeedRatings: tags['ISOSpeedRatings']?.description || 0,
              shutterSpeedValue: tags['ShutterSpeedValue']?.description || '',
              apertureValue: tags['ApertureValue']?.description || '',
              brightnessValue: tags['BrightnessValue']?.description || '',
              exposureBiasValue: tags['ExposureBiasValue']?.description || '',
              maxApertureValue: tags['MaxApertureValue']?.description || '',
              subjectDistance: tags['SubjectDistance']?.description || '',
              meteringMode: tags['MeteringMode']?.description || '',
              flash: tags['Flash']?.description || '',
              focalLength: tags['FocalLength']?.description || '',
              subSecTimeOriginal: tags['SubSecTimeOriginal']?.description || '',
              colorSpace: tags['ColorSpace']?.description || '',
              pixelXDimension: tags['PixelXDimension']?.value || 0,
              pixelYDimension: tags['PixelYDimension']?.value || 0,
              sensingMethod: tags['SensingMethod']?.description || '',
              sceneType: tags['SceneType']?.description || '',
              exposureMode: tags['ExposureMode']?.description || '',
              whiteBalance: tags['WhiteBalance']?.description || '',
              digitalZoomRatio: tags['DigitalZoomRatio']?.description || '',
              focalLengthIn35mmFilm: tags['FocalLengthIn35mmFilm']?.description || 0,
              sceneCaptureType: tags['WhiteBalance']?.description || '',
              contrast: tags['Contrast']?.description || '',
              saturation: tags['Saturation']?.description || '',
              sharpness: tags['Sharpness']?.description || '',
              subjectDistanceRange: tags['SubjectDistanceRange']?.description || '',
              gpsVersionID: tags['GPSVersionID']?.description || '',
              gpsLatitudeRef: tags['GPSLatitudeRef']?.description || '',
              gpsLatitude: tags['GPSLatitude']?.description || 0,
              gpsLongitudeRef: tags['GPSLongitudeRef']?.description || '',
              gpsLongitude: tags['GPSLongitude']?.description || 0,
              gpsAltitudeRef: tags['GPSAltitudeRef']?.description || '',
              gpsAltitude: tags['GPSAltitude']?.description || '',
              gpsTimeStamp: tags['GPSTimeStamp']?.description || '',
              gpsImgDirectionRef: tags['GPSImgDirectionRef']?.description || '',
              gpsImgDirection: tags['GPSImgDirection']?.description || '',
              gpsDateStamp: tags['GPSDateStamp']?.description || '',
            }
            resolve({ type: 'exifInfo', data: exifData });
          }
        }
        reader.readAsArrayBuffer(file);
      });
    };

    const loadImage = async (imageSrc: string): Promise<ImageDimensions> => {
      const image = new Image();
      image.src = imageSrc;
      return new Promise((resolve, reject) => {
        image.onabort = () => reject('image loading was aborted');
        image.onerror = () => reject('error loading image src')
        image.onload = () => {
          resolve({ width: image.width, height: image.height })
        }
      });
    }

    try {
      setErrorMessage('');
      setIsLoading(true);
      const apiUrl =  import.meta.env.VITE_API_URL;

      const response = await axios.post(
        `${apiUrl}/analyze/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
      );
      const fileInfo = await readFile(file);
      const dimensions = await loadImage(imageUrl);

      addPhoto({
        filename: acceptedFiles[0].name,
        src: imageUrl,
        vision: response.data,
        [fileInfo.type]: fileInfo.data,
        width: dimensions.width,
        height: dimensions.height
      });
      setPhotoArrayIndex(0);
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('Error uploading file');
    } finally {
      setIsLoading(false);
    }
  }, [addPhoto, setPhotoArrayIndex]);

  const {getRootProps, getInputProps} = useDropzone({    
    accept: {
    'image/jpeg': [],
    'image/png': []
    },
    multiple: false,
    onDrop
  });

  return (
    <div
      className={clsx({
        [styles.gridContainer]: true,
        [styles.gridContainLeftSidebar]: openLeftSidebar
      })}
    >
      {isLoading
        ? <IconLoader2 className={styles.loader} stroke={2} size={100} />
        : (
          <section
            {...getRootProps()}
            className={styles.main}
          > 
            
            <input {...getInputProps()} />
            <div className={styles.container}>
              <div>
                <h1 className={styles.title}>Analyze an image file using the Cloud Vision API</h1>
                <p className={styles.paragraph}>Drag 'n' drop an image here or click to select a file</p>
                <em className={styles.italic}>(Only *.jpeg and *.png images will be accepted)</em>
              </div>
              <img className={styles.image} src={visionIcon} width={200} height={200}/>
            </div>
            
          </section>
        )
      }

      {errorMessage !== '' && (
        <div className={styles.errorContainer}>
          <IconAlertCircle className={styles.alertIcon}/>
          <div className={styles.errorText}>{errorMessage}</div>
        </div>
      )}

    </div>
  );
};

export default ImageUpload;
