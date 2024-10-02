import { useRef, useCallback, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import AnnotationScoreView from '../annotation-score-view/AnnotationScoreView';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { usePreviousIndexValue } from '../../hooks/usePreviousIndexValue';
import { useAppStore } from '../../store/UseAppStore';
import { Photo } from '../../types';
import { defaultPhoto, HIGHLIGHT_BLUE, HIGHLIGHT_GREEN } from '../../assets/defaultData';
import styles from './PhotoAnalysis.module.css';

const PhotoAnalysis = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { winHeight, winWidth } = useWindowDimensions();
  const { selectedPhotoIndex, photosArray } = useAppStore();

  const [photo, setPhoto] = useState<Photo>(defaultPhoto);
  const [imgDimensions, setImgDimensions] = useState({width: 0, height: 0});
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [hasObjects, setHasObjects] = useState<boolean>(true);
  const [hoveredObjIndex, setHoveredObjIndex] = useState<number | null>(null);
  const prevHoveredObjIndex = usePreviousIndexValue(hoveredObjIndex);

  const tabPanelVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      const photo: Photo = photosArray[selectedPhotoIndex]
      const aspectRatio: number = photo.width / photo.height;
      let photoHasObjects: boolean = true;
      let calcWidth: number = 0;
      let calcHeight: number = 0;
      
      if (aspectRatio >= 1) {
        switch(true) {
          case winWidth > 1850: 
            calcWidth = winWidth * 0.35;
            break;
          case winWidth <= 1850 && winWidth > 1000:
            calcWidth = winWidth * 0.3;
            break;
          case winWidth < 1000:
            calcWidth = winWidth * 0.8;
            break;
          default:
            break;
        }
        calcHeight = calcWidth / aspectRatio;
      } else {
        calcHeight = winHeight * 0.7;
        calcWidth = calcHeight * aspectRatio;
      }

      if (
        Object.hasOwn(photo.vision, 'localizedObjectAnnotations')
        && photo.vision["localizedObjectAnnotations"].length === 0
      ) {
        photoHasObjects = false;
      }
      
      clearCanvas();
      setTabIndex(0);
      setHasObjects(photoHasObjects);
      setImgDimensions({width: calcWidth, height: calcHeight});
      setPhoto(photo)
    } else {
      clearCanvas();
      setTabIndex(0);
      setPhoto(defaultPhoto);
    }
  }, [photosArray, selectedPhotoIndex, winHeight, winWidth]);

  const drawCanvasBoxHovered = useCallback((object: any, color: string) => {
    const canvas = canvasRef.current;
    const ctx = canvas !== null && canvas.getContext('2d');

    const coordsArr = object['boundingPoly']['normalizedVertices']
    const xArr = coordsArr.map(coord => coord.x);
    const yArr = coordsArr.map(coord => coord.y);

    const x = Math.min(...xArr) * imgDimensions.width;
    const xMax = Math.max(...xArr) * imgDimensions.width;
    const y = Math.min(...yArr) * imgDimensions.height;
    const yMax = Math.max(...yArr) * imgDimensions.height;

    const boxWidth  = xMax - x;
    const boxHeight = yMax - y;

    if (ctx) {
      ctx.save();
      ctx.lineWidth = color === HIGHLIGHT_BLUE ? 5 : 4;
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y, boxWidth, boxHeight);
      ctx.restore();
    }
  }, [imgDimensions]);

  const drawCanvasBoxes = () => {
    if (photo.vision["localizedObjectAnnotations"].length) {
      const canvas = canvasRef.current;
      const ctx = canvas !== null && canvas.getContext('2d');

      photo.vision["localizedObjectAnnotations"].forEach((object) => {
        const coordsArr = object['boundingPoly']['normalizedVertices']
        const xArr = coordsArr.map(coord => coord.x);
        const yArr = coordsArr.map(coord => coord.y);
    
        const x = Math.min(...xArr) * imgDimensions.width;
        const xMax = Math.max(...xArr) * imgDimensions.width;
        const y = Math.min(...yArr) * imgDimensions.height;
        const yMax = Math.max(...yArr) * imgDimensions.height;
    
        const boxWidth  = xMax - x;
        const boxHeight = yMax - y;

        if (ctx) {
          ctx.save();
          ctx.lineWidth = 4;
          ctx.strokeStyle = HIGHLIGHT_GREEN;
          ctx.strokeRect(x, y, boxWidth, boxHeight);
          ctx.restore();
        }
      });
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas !== null && canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  const handleTabClick = (index: number) => {
    if (index === 1) {
      drawCanvasBoxes();
    } else {
      clearCanvas();
    }
    setTabIndex(index);
  }

  useEffect(() => {
    if (tabIndex === 1 && prevHoveredObjIndex !== null) {
      drawCanvasBoxHovered(photo.vision["localizedObjectAnnotations"][prevHoveredObjIndex], HIGHLIGHT_GREEN);
    }

    if (tabIndex === 1 && hoveredObjIndex !== null) {
      drawCanvasBoxHovered(photo.vision["localizedObjectAnnotations"][hoveredObjIndex], HIGHLIGHT_BLUE);
    }
  }, [hoveredObjIndex, drawCanvasBoxHovered, photo.vision, tabIndex, prevHoveredObjIndex]);

  return (
    <Tabs
      focusTabOnClick={false}
      selectedIndex={tabIndex}
      onSelect={handleTabClick}
    >
      <TabList className={styles.tabList}>
        <Tab 
          className={clsx({
            [styles.activeTab]: tabIndex === 0
          })}
        >Labels</Tab>
        <Tab
          className={clsx({
            [styles.activeTab]: tabIndex === 1,
            [styles.disabledTab]: !hasObjects
          })}
          disabled={!hasObjects}
        >Objects</Tab>
      </TabList>

      <div className={styles.mainContainer}>

        <div className={styles.imgCanvasContainer}>
          <canvas
            className={styles.canvas}
            ref={canvasRef}
            width={imgDimensions.width}
            height={imgDimensions.height}
          />
          <img
            className={clsx({
              [styles.image]: true,
              [styles.pngImg]: Object.hasOwn(photo, 'pngInfo')
            })}
            src={photo.src} 
            width={imgDimensions.width} 
            height={imgDimensions.height}
          />
        </div>

        <TabPanel>
          <motion.div
            className={styles.panelContain}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tabPanelVariants}
            transition={{ duration: 0.3 }}
          >
            <AnnotationScoreView
              annotations={photo.vision["labelAnnotations"]}
            />
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            className={styles.panelContain}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tabPanelVariants}
            transition={{ duration: 0.3 }}
          >
            <AnnotationScoreView
              annotations={photo.vision["localizedObjectAnnotations"]}
              setHoveredObjIndex={setHoveredObjIndex}
            />
          </motion.div>
        </TabPanel>

      </div>
    </Tabs>
  );
};

export default PhotoAnalysis;
