import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import AppHeader from './components/app-header/AppHeader';
import GalleryNav from './components/gallery-nav/GalleryNav';
import ImageUpload from './components/image-upload/ImageUpload';
import DisplayExifData from './components/display-exif-data/DisplayExifData';
import DisplayPngData from './components/display-png-data/DisplayPngData';
import MainContent from './components/main-content/MainContent';
import { useAppStore } from './store/UseAppStore';
import styles from './App.module.css';

const App = () => {
  const {
    openLeftSidebar,
    openRightSidebar,
    selectedPhotoIndex,
    photosArray,
  } = useAppStore();

  const renderMetadata = () => {
    if (selectedPhotoIndex === null) {
      return null;
    } else if (Object.hasOwn(photosArray[selectedPhotoIndex], 'exifInfo')) {
      return <DisplayExifData />;
    } else if (Object.hasOwn(photosArray[selectedPhotoIndex], 'pngInfo')) {
      return <DisplayPngData />;
    }
  };

  const renderMainBody = () => {
    if (selectedPhotoIndex === null) {
      return <ImageUpload/>
    } else {
      return <MainContent/>
    }
  };

  return (
    <main>
      <AppHeader/>
      <section className={styles.section}>

        <aside
          className={clsx({
            [styles.sidebarLeft]: true,
            [styles.hideSidebarLeft]: !openLeftSidebar
          })}
        >
          <GalleryNav/>
        </aside>
  
        <div className={styles.mainContainer}>
          {renderMainBody()}
        </div>

        <AnimatePresence>
          {openRightSidebar && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.37, 0, 0.63, 1]
              }}
            >
              <aside className={styles.sidebarRight}>
                {selectedPhotoIndex !== null && (
                  renderMetadata()
                )}
              </aside>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </main>
  );
};

export default App;
