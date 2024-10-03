import clsx from 'clsx';
import { IconRestore, IconFileInfo } from '@tabler/icons-react';
import PhotoAnalysis from '../photo-analysis/PhotoAnalysis';
import Tooltip from '../tooltip/Tooltip';
import { useAppStore } from '../../store/UseAppStore';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import styles from './MainContent.module.css';

const MainContent = () => {
  const {
    selectedPhotoIndex,
    photosArray,
    openLeftSidebar,
    openRightSidebar,
    toggleRightSidebar,
    reset
  } = useAppStore();
  const { winWidth } = useWindowDimensions();

  const handleRootClick = () => {
    if (openRightSidebar && winWidth < 1575) {
      toggleRightSidebar();
    }
  }

  return (
    <div
      className={clsx({
        [styles.root]: true,
        [styles.rootLeftSidebar]: openLeftSidebar,
        [styles.mobileRoot]: winWidth < 1000
      })}
      onClick={() => handleRootClick()}
    >
      <section
        className={clsx({
          [styles.headerSection]: true,
          [styles.headerClosedLeftSidebar]: !openLeftSidebar,
          [styles.mobileHeader]: winWidth < 1000
        })}
      >
        <div className={styles.filename}>
          <Tooltip
            text="Filename"
            placement="bottom"
          >
            <IconFileInfo className={styles.filenameIcon} size={30}/>
          </Tooltip>
          {selectedPhotoIndex !== null && <span>{photosArray[selectedPhotoIndex].filename}</span>}
        </div>
        <Tooltip
          offsetX={16}
          offsetY={5}
          text="Reset"
          placement="bottom"
        >
          <button className={styles.resetBtn} onClick={() => reset()}>
            <IconRestore/>
          </button>
        </Tooltip>
      </section>
      <PhotoAnalysis/>
    </div>
  );
};

export default MainContent;
