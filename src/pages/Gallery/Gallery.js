
import styles from './Gallery.module.scss';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useState } from 'react';
import { ModalPhoto } from '../../components/ModalPhoto/Modal';

export const Gallery = () => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  function handleOpenPhotoModal() {
    setIsPhotoModalOpen(true);
  }

  function handleClosePhotoModal() {
    setIsPhotoModalOpen(false);
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <h3>Hospital Vera Cruz</h3>
        <img
          className={styles.images}
          src='https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/311812626_781883889801852_4873904278404945318_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=T_oMuQBgQyQAX9hQIQ0&_nc_ht=scontent-man2-1.xx&oh=00_AfC7crgHhQauy9KWsa8ElLidMDpNGDpKkBYCVR2X14Iphg&oe=636D5E9F'
          alt=''
        />
        <button
          type='button'
          onClick={handleOpenPhotoModal}
        >
          Ver Fotos
        </button>
      </section>
      <section className={styles.videos}>
        <h2>Videos</h2>
        <video controls autoplay>
          <source src={'/videos/djbeto1.mp4'} type="video/mp4">
          </source>
        </video>
        <video controls autoplay muted>
          <source src='/videos/djbeto2.mp4' type="video/mp4">
          </source>
        </video>
        <video controls autoplay muted>
          <source src='/videos/djbeto3.mp4' type="video/mp4">
          </source>
        </video>
      </section>
      <Footer />
      <ModalPhoto
        isOpen={isPhotoModalOpen}
        onRequestClose={handleClosePhotoModal}
      >

      </ModalPhoto>
    </>
  );
};
