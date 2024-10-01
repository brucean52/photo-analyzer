import { useState, useEffect } from 'react';
import { useAppStore } from '../../store/UseAppStore';
import { PngInfo } from '../../types';
import { defaultPngInfo, pngInfoTableRows } from '../../assets/defaultData';
import styles from './DisplayPngData.module.css';

const DisplayPngData = () => {
  const { selectedPhotoIndex, photosArray } = useAppStore();
  const [pngInfo, setPngInfo] = useState<PngInfo>(defaultPngInfo);

  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      setPngInfo(photosArray[selectedPhotoIndex].pngInfo)
    } else {
      setPngInfo(defaultPngInfo);
    }
  }, [photosArray, selectedPhotoIndex]);

  return (
    <div className={styles.root}>
      <div>
        <h3 className={styles.title}>PNG Image Info</h3>
      </div>
      <table className={styles.table}>
        <tbody className={styles.tableBody}>
          {pngInfoTableRows.map(row => 
            <tr key={row.keyValue}>
              <td>{row.name}</td>
              <td align="right">{pngInfo[row.keyValue]}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPngData;
