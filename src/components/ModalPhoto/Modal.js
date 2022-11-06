import Modal from 'react-modal';
import styles from './Modal.module.scss';

import { images } from '../../imagesData';
import closeIcon from '../../assets/close.svg'

export const ModalPhoto = ({ isOpen, onRequestClose }) => {


  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.reactModaOverlay}
        className={styles.reactModalContent}
      >
        <button type='button' onClick={onRequestClose}>
          <img className={styles.btnClose} src={closeIcon} alt="close icon X" />
        </button>
        <div className={styles.container}>
          <div
            className={styles.carousel}

          >
            <div className={styles.inner}>
              {images.map((image) => (
                <div
                  className={styles.item}
                  key={image}
                >
                  <img
                    src={image}
                    alt='imagem festa dj beto'
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
