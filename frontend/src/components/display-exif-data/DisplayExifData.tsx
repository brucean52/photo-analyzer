import { useState, useEffect } from 'react';
import Accordion from '../accordion/Accordion';
import { useAppStore } from '../../store/UseAppStore';
import { ExifInfo } from '../../types';
import {
  defaultExifInfo,
  exifImageInfoTableRows,
  exifPhotoInfoTableRows,
  exifGpsInfoTableRows
} from '../../assets/defaultData';
import styles from './DisplayExifData.module.css';

const DisplayExifData = () => {
  const { selectedPhotoIndex, photosArray } = useAppStore();
  const [exifInfo, setExifInfo] = useState<ExifInfo>(defaultExifInfo);

  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      setExifInfo(photosArray[selectedPhotoIndex].exifInfo);
    } else {
      setExifInfo(defaultExifInfo);
    }
  }, [photosArray, selectedPhotoIndex]);

  const renderImageInfoTable = () => (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {exifImageInfoTableRows.map(row => 
          <tr key={'img-' + row.keyValue}>
            <td className={styles.dataNameRow}>{row.name}</td>
            <td className={styles.dataValueRow} align="right">{exifInfo[row.keyValue]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  const renderPhotoInfoTable = () => (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {exifPhotoInfoTableRows.map(row => 
          <tr key={'photo-' + row.keyValue}>
            <td className={styles.dataNameRow}>{row.name}</td>
            <td className={styles.dataValueRow} align="right">{exifInfo[row.keyValue]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  const renderGpsInfoTable = () => (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {exifGpsInfoTableRows.map(row => 
          <tr key={'gps-' + row.keyValue}>
            <td className={styles.dataNameRow}>{row.name}</td>
            <td className={styles.dataValueRow} align="right">{exifInfo[row.keyValue]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div className={styles.container}>

      <div className={styles.accordContain}>
        <Accordion title="Exif Image Info">
          {renderImageInfoTable()}
        </Accordion>
      </div>

      <div className={styles.accordContain}>
        <Accordion title="Exif Photo Info">
          {renderPhotoInfoTable()}
        </Accordion>
      </div>

      <div className={styles.accordContain}>
        <Accordion title="Exif GPS Info">
          {renderGpsInfoTable()}
        </Accordion>
      </div>

    </div>
  );
};

export default DisplayExifData;
