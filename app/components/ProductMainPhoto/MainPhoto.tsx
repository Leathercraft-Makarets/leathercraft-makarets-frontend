'use client';

import { useState } from 'react';
import styles from './MainPhoto.module.css'; 
import Thumbnails from '../Thumbnails/Thumbnails';
import LightBoxStyles from './LightBox.module.css';

const productImages = [
  'https://m.media-amazon.com/images/I/716uU5dFErL._AC_UY1000_.jpg',
  'https://i.ibb.co/5xXsDTSC/status-anxiety-wallet-visions-cocoa-3-lifestyle-img.webp',
  'https://i.ibb.co/b5PBj3Pm/status-anxiety-wallet-is-now-better-black-3-lifestyle-img-234234.jpg',
  'https://i.ibb.co/Y4K2WRQ3/Manita-Womens-Wallet-Green-Cactus-Leater-Vegan-Texcoco-Collective-Model-Product-Shot-1200x.webp',
  'https://i.ibb.co/k2Vt5P7P/The-Sling-Wallet-Tan-14.webp',
  'https://i.ibb.co/cctxnfK5/Galway-Crystal-2021-model-campaign-by-Julia-Dunin-Photography-103-2000x.webp',
  'https://i.ibb.co/Xrq8Jjgz/status-anxiety-wallet-is-now-better-emerald-3-lifestyle-img.webp',
  'https://i.ibb.co/zTS10SC7/status-anxiety-wallet-impermanent-khaki-1-lifestyle-img-499e2912-2cec-43bf-ac3a-9a9871caf40e.webp',
  'https://i.ibb.co/VpBGb3PQ/status-anxiety-wallet-visions-camel-2-lifestyle-img-1.webp',
  'https://i.ibb.co/Q7wc0Z8X/Status-Anxiety-Visions-Wallet-Cocoa-1-1445x.webp',
  'https://i.ibb.co/mrzbLtzk/81-Xw7k-khc-L-AC-SX679.jpg',
  'https://i.ibb.co/2TYjy86/71-I-z-pvs-TL-AC-UY1000.jpg',
];

const MainPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrev = (e: any) => {
    if (e) {
      e.stopPropagation();
    }

    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: any) => {
    if (e) {
      e.stopPropagation();
    }
    
    setCurrentIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div>
      <div 
        className={`${styles.imagePlaceholder} ${styles.mainImage}`}
        style={{ 
          backgroundImage: `url(${productImages[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer' 
        }}
        onClick={() => setIsLightboxOpen(true)} 
      >
        <button onClick={handlePrev} className={styles.arrowBtn}>‹</button>
        <button onClick={handleNext} className={styles.arrowBtn}>›</button>
      </div>
      <Thumbnails 
        images={productImages} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
      />
      {isLightboxOpen && (
        <div 
          className={LightBoxStyles.lightboxOverlay} 
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            className={LightBoxStyles.closeBtn} 
            onClick={() => setIsLightboxOpen(false)}
          >
            ×
          </button>
          <button 
            onClick={handlePrev} 
            className={`${styles.arrowBtn} ${LightBoxStyles.lightboxArrowPrev}`}
          >
            ‹
          </button>
          <img 
            src={productImages[currentIndex]} 
            alt="Product Fullscreen" 
            className={LightBoxStyles.lightboxImage} 
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            onClick={handleNext} 
            className={`${styles.arrowBtn} ${LightBoxStyles.lightboxArrowNext}`}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
} 

export default MainPhoto;