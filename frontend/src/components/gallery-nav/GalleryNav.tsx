import clsx from 'clsx';
import Tooltip from '../tooltip/Tooltip';
import { useAppStore } from '../../store/UseAppStore';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import styles from './GalleryNav.module.css'

const GalleryNav = () => {
  const { selectedPhotoIndex, photosArray, setPhotoArrayIndex } = useAppStore();
  const { winWidth } = useWindowDimensions();

  const renderPhotoList = photosArray.map((photo, index) => {
    const normalizedWidth: number = 50;
    const aspectRatio = photo.width / photo.height;
    const normalizedHeight: number = Math.round(normalizedWidth / aspectRatio);

    return (
      <div
        key={photo.src}
        className={clsx({
          [styles.selectedImageItem]: index === selectedPhotoIndex,
          [styles.imageItem]: index !== selectedPhotoIndex
        })}
        style={{
          width: `${normalizedWidth}px`,
          height: `${normalizedHeight}px`
        }}
        onClick={() => setPhotoArrayIndex(index, winWidth > 1575 ? false : true)}
      >
        <Tooltip text={photo.filename} placement="right">
          <img
            className={clsx({
              [styles.img]: true,
              [styles.pngImg]: Object.hasOwn(photo, 'pngInfo')
            })}
            srcSet={`${photo.src} 2x`}
            src={photo.src}
            alt={photo.filename}
            width={normalizedWidth}
            height={normalizedHeight}
          />
        </Tooltip>
      </div>
    )
  });

  return (
    <div className={styles.container}>
      <div className={styles.imageList}>
        {renderPhotoList}
      </div>
    </div>
  );
};

export default GalleryNav;
