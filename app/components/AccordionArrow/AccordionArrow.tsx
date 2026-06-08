'use client';

import Image, { StaticImageData } from 'next/image';
import ArrowUpLogoWhite from '@/logo/ArrowUpLogo/ArrowUpLogoWhite.svg';
import styles from './AccordionArrow.module.css';

interface AccordionArrowProps {
  isOpen: boolean;
  arrowIcon?: StaticImageData;
}

const AccordionArrow = ({ isOpen, arrowIcon = ArrowUpLogoWhite }: AccordionArrowProps) => {
  return (
    <span className={`${styles.arrowWrapper} ${isOpen ? styles.arrowOpen : styles.arrowClosed}`}>
      <Image 
        src={arrowIcon} 
        alt="Toggle accordion" 
        className={styles.arrowIcon}
      />
    </span>
  );
};

export default AccordionArrow;
