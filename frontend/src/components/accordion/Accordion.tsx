import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './Accordion.module.css';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.root}>
      <div
        className={clsx({
          [styles.header]: true,
          [styles.openHeader]: isOpen,
          [styles.closedHeader]: !isOpen
        })}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div className={styles.title}>{props.title}</div>
        <IconChevronDown size={30} className={`${styles.icon} ${isOpen && styles.rotate}`}/> 
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
