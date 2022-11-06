import Modal from 'react-modal';
import styles from './Modal.module.scss';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../imagesData';

export const ModalPhoto = ({ isOpen, onRequestClose }) => {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.reactModaOverlay}
        className={styles.reactModalContent}
      >
        <div className={styles.container}>
          <div
            className={styles.carousel}
            whileTap={{ cursor: 'grabbing' }}
          >
            <div className={styles.inner}
              drag="x"
              dragConstraints={{ right: 0, left: - width }}
            >
              {images.map((image) => (
                <div
                  className={styles.item}
                  key={image}
                >
                  <img
                    src={image}
                    alt=''
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
