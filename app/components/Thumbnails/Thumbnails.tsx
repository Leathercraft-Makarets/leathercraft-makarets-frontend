'use client';

import styles from './Thumbnails.module.css';

interface ThumbnailsProps {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Thumbnails = ({ images, currentIndex, setCurrentIndex }: ThumbnailsProps) => {
  const length = images.length;

  const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;

  const visibleIndices = [prevIndex, currentIndex, nextIndex];

  return (
    <div className={styles.thumbnails}>
      {
        visibleIndices.map((imageIndex, id) => {
          const isCenter = id === 1; 

          return (
            <div 
              key={id}
              onClick={() => setCurrentIndex(imageIndex)}
              className={`
                ${styles.imagePlaceholder} 
                ${styles.thumbnail} 
                ${isCenter ? styles.activeThumbnail : ''} 
              `}
              style={{ 
                backgroundImage: `url(${images[imageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer'
              }}
            />
          );
        })
      }
    </div>
  );
} 

export default Thumbnails;