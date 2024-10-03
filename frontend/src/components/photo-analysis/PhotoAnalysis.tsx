import { useRef, useCallback, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import AnnotationScoreView from '../annotation-score-view/AnnotationScoreView';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { usePreviousIndexValue } from '../../hooks/usePreviousIndexValue';
import { useAppStore } from '../../store/UseAppStore';
import { Photo } from '../../types';
import {
  defaultPhoto,
  defaultRenderTabsMap,
  HIGHLIGHT_BLUE,
  HIGHLIGHT_GREEN
} from '../../assets/defaultData';
import styles from './PhotoAnalysis.module.css';

const PhotoAnalysis = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { winHeight, winWidth } = useWindowDimensions();
  const { selectedPhotoIndex, photosArray } = useAppStore();

  const [photo, setPhoto] = useState<Photo>(defaultPhoto);
  const [imgDimensions, setImgDimensions] = useState({width: 0, height: 0});
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [renderTabsMap, setRenderTabsMap] = useState(defaultRenderTabsMap);
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
      const tabMap = {...defaultRenderTabsMap};
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
        && photo.vision["localizedObjectAnnotations"].length > 0
      ) {
        tabMap.objects = true;
      }

      if (
        Object.hasOwn(photo.vision, 'logoAnnotations')
        && photo.vision["logoAnnotations"].length > 0
      ) {
        tabMap.logos = true;
      }

      if (
        Object.hasOwn(photo.vision, 'landmarkAnnotations')
        && photo.vision["landmarkAnnotations"].length > 0
      ) {
        tabMap.landmarks = true;
      }

      clearCanvas();
      setTabIndex(0);
      setRenderTabsMap(tabMap);
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

    const coordsArr = object['boundingPoly']['normalizedVertices'].length > 0 
    ? object['boundingPoly']['normalizedVertices']
    : object['boundingPoly']['vertices'];
    const xArr = coordsArr.map(coord => coord.x);
    const yArr = coordsArr.map(coord => coord.y);

    const calcWidth = object['boundingPoly']['normalizedVertices'].length > 0 
    ? imgDimensions.width
    : (imgDimensions.width / photo.width);

    const calcHeight = object['boundingPoly']['normalizedVertices'].length > 0 
    ? imgDimensions.height
    : (imgDimensions.height / photo.height);

    const x = Math.min(...xArr) * calcWidth;
    const xMax = Math.max(...xArr) * calcWidth;
    const y = Math.min(...yArr) * calcHeight;
    const yMax = Math.max(...yArr) * calcHeight;

    const boxWidth  = xMax - x;
    const boxHeight = yMax - y;

    if (ctx) {
      ctx.save();
      ctx.lineWidth = color === HIGHLIGHT_BLUE ? 5 : 4;
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y, boxWidth, boxHeight);
      ctx.restore();
    }
  }, [imgDimensions, photo.height, photo.width]);

  const drawCanvasBoxes = (annotationsArr) => {
    const canvas = canvasRef.current;
    const ctx = canvas !== null && canvas.getContext('2d');

    annotationsArr.forEach((object) => {
      const coordsArr = object['boundingPoly']['normalizedVertices'].length > 0 
        ? object['boundingPoly']['normalizedVertices']
        : object['boundingPoly']['vertices'];
      const xArr = coordsArr.map(coord => coord.x);
      const yArr = coordsArr.map(coord => coord.y);

      const calcWidth = object['boundingPoly']['normalizedVertices'].length > 0 
      ? imgDimensions.width
      : (imgDimensions.width / photo.width);

      const calcHeight = object['boundingPoly']['normalizedVertices'].length > 0 
      ? imgDimensions.height
      : (imgDimensions.height / photo.height);
  
      const x = Math.min(...xArr) * calcWidth;
      const xMax = Math.max(...xArr) * calcWidth;
      const y = Math.min(...yArr) * calcHeight;
      const yMax = Math.max(...yArr) * calcHeight;
  
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

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas !== null && canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  const handleTabClick = (index: number) => {
    clearCanvas();
    switch(index) {
      case 1:
        drawCanvasBoxes(photo.vision["localizedObjectAnnotations"]);
        break;
      case 2:
        drawCanvasBoxes(photo.vision["logoAnnotations"]);
        break;
      case 3:
        drawCanvasBoxes(photo.vision["landmarkAnnotations"]);
        break;
      default:
        break;
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

    if (tabIndex === 2 && prevHoveredObjIndex !== null) {
      drawCanvasBoxHovered(photo.vision["logoAnnotations"][prevHoveredObjIndex], HIGHLIGHT_GREEN);
    }

    if (tabIndex === 2 && hoveredObjIndex !== null) {
      drawCanvasBoxHovered(photo.vision["logoAnnotations"][hoveredObjIndex], HIGHLIGHT_BLUE);
    }

    if (tabIndex === 3 && prevHoveredObjIndex !== null) {
      drawCanvasBoxHovered(photo.vision["landmarkAnnotations"][prevHoveredObjIndex], HIGHLIGHT_GREEN);
    }

    if (tabIndex === 3 && hoveredObjIndex !== null) {
      drawCanvasBoxHovered(photo.vision["landmarkAnnotations"][hoveredObjIndex], HIGHLIGHT_BLUE);
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
            [styles.disabledTab]: !renderTabsMap.objects
          })}
        >Objects</Tab>
        <Tab
          className={clsx({
            [styles.activeTab]: tabIndex === 2,
            [styles.disabledTab]: !renderTabsMap.logos
          })}
        >Logos</Tab>
        <Tab
          className={clsx({
            [styles.activeTab]: tabIndex === 3,
            [styles.disabledTab]: !renderTabsMap.landmarks
          })}
        >Landmarks</Tab>
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
              annotations={photo.vision["logoAnnotations"]}
              setHoveredObjIndex={setHoveredObjIndex}
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
              annotations={photo.vision["landmarkAnnotations"]}
              setHoveredObjIndex={setHoveredObjIndex}
            />
          </motion.div>
        </TabPanel>

      </div>
    </Tabs>
  );
};

export default PhotoAnalysis;
