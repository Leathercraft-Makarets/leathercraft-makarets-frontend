'use client';

import { useState } from 'react';
import styles from './Description.module.css';
import AccordionArrow from '@/components/AccordionArrow/AccordionArrow';

const Description = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeader} onClick={toggleDescription}>
          <span>Опис</span>
          <AccordionArrow isOpen={isDescriptionOpen} />
        </div>
        <div className={`${styles.accordionContent} ${isDescriptionOpen ? styles.open : styles.closed}`}>
          <div className={styles.colorsListInner}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl 
              tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. 
              Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit 
              at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea 
              dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac. Senectus et netus et malesuada. Nunc pulvinar 
              sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a 
              diam sollicitudin tempor id. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 

export default Description;