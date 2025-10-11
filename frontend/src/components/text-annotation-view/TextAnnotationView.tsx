import { Dispatch, SetStateAction } from 'react';
import styles from './TextAnnotationView.module.css';

type Props = {
  annotations: any[];
  setHoveredObjIndex?: Dispatch<SetStateAction<number | null>>
}

const TextAnnotationView = (props: Props) => {

  return (
    <div className={styles.root}>
      <div className={styles.card}>  
        <div className={styles.gridContainer}>

          {props.annotations && props.annotations.map((object, index) => (
            <div
              key={index}
              className={styles.gridRow}
              onMouseEnter={() => props.setHoveredObjIndex && props.setHoveredObjIndex(index)}
              onMouseLeave={() => props.setHoveredObjIndex && props.setHoveredObjIndex(null)}
            >
              <div className={styles.gridItem}>
                {Object.hasOwn(object, 'name') ? object['name']: object['description']}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>  
  )  
};

export default TextAnnotationView;
