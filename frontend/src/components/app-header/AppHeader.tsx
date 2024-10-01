import clsx from 'clsx';
import {
  IconCameraCog,
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpandFilled,
  IconLayoutSidebarRightCollapseFilled,
  IconLayoutSidebarRightExpandFilled,
} from '@tabler/icons-react';
import Tooltip from '../tooltip/Tooltip';
import { useAppStore } from '../../store/UseAppStore';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  const {
    openLeftSidebar,
    openRightSidebar,
    selectedPhotoIndex,
    toggleLeftSidebar,
    toggleRightSidebar
  } = useAppStore();

  const rightSidebarTooltipText =
    selectedPhotoIndex === null 
      ? 'No Image Selected'
      : openRightSidebar
      ? "Close Image Info"
      : "Open Image Info"

  const rightSidebarClicked = () => {
    if (selectedPhotoIndex !== null) {
      toggleRightSidebar()
    }
  }

  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <div className={styles.headerTitle}>

          <Tooltip
            offsetX={6}
            offsetY={2}
            text={openLeftSidebar ? "Close Gallery" : "Open Gallery"}
            placement="bottom"
          >
            <button
                aria-label="left-sidebar-btn"
                className={styles.sidebarBtn}
                onClick={() =>toggleLeftSidebar()}
              >
                {openLeftSidebar
                  ?
                    <IconLayoutSidebarLeftCollapseFilled
                      className={styles.sidebarIcon}
                      size={36}
                    />
                  :
                    <IconLayoutSidebarLeftExpandFilled
                      className={styles.sidebarIcon}
                      size={36}
                    />
                }
              </button>
          </Tooltip>

          <div className={styles.logoContainer}>
            <IconCameraCog className={styles.logoIcon} size={32}/>
            <h2 className={styles.title}>Photo Analyzer</h2>
          </div>
        </div>   

        <div className={styles.headerRight}>
          <Tooltip
            offsetX={15}
            offsetY={-8}
            text="Github"
            placement="bottom"
          >
            <button
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
              className={styles.githubBtn}
            >
              <a href="https://github.com/brucean52/photo-analyzer" target="_blank" rel="noreferrer">
                <img src="/logos/github-mark-white.png" width={24} height={24}/>
              </a>
            </button>
          </Tooltip>
            
          <Tooltip
            offsetX={selectedPhotoIndex === null ? -10 : -3}
            offsetY={selectedPhotoIndex === null ? -4 : 2}
            text={rightSidebarTooltipText}
            placement="bottom"
          >
            <button
              aria-label="sidebar-btn"
              className={clsx({
                [styles.sidebarBtn]: true,
                [styles.disabledSidebarBtn]: selectedPhotoIndex === null
              })}
              onClick={() => rightSidebarClicked()}
            >
              {openRightSidebar
                ?
                  <IconLayoutSidebarRightCollapseFilled
                    className={styles.sidebarIcon}
                    size={36}
                  />
                : 
                  <IconLayoutSidebarRightExpandFilled
                    className={clsx({
                      [styles.sidebarIcon]: selectedPhotoIndex !== null,
                      [styles.disabledSidebarIcon]: selectedPhotoIndex === null
                    })}
                    size={36}
                  />
              }
            </button>
          </Tooltip>

        </div>
      </section>
    </header>
  );
};

export default AppHeader;
