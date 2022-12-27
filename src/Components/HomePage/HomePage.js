import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { HomeImg } from '../../assets/icons/home';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imagem}>
          <figure>
            <HomeImg />
          </figure>
        </div>
        <h1 className={styles.titulo}>Trabalho em Equipe</h1>
      </div>
      <Swiper
        className={styles.wrapper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <p>
            {' '}
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti
            nisl tellus vestibulum dictum luctus cum habitasse augue. Convallis
            vitae, dictum justo, iaculis id. Cras a ac augue netus egestas
            semper varius facilisis id.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p>
            {' '}
            2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti
            nisl tellus vestibulum dictum luctus cum habitasse augue. Convallis
            vitae, dictum justo, iaculis id. Cras a ac augue netus egestas
            semper varius facilisis id.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p>
            {' '}
            3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti
            nisl tellus vestibulum dictum luctus cum habitasse augue. Convallis
            vitae, dictum justo, iaculis id. Cras a ac augue netus egestas
            semper varius facilisis id.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p>
            {' '}
            4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti
            nisl tellus vestibulum dictum luctus cum habitasse augue. Convallis
            vitae, dictum justo, iaculis id. Cras a ac augue netus egestas
            semper varius facilisis id.
          </p>
        </SwiperSlide>
      </Swiper>
      <div className={styles.linksDiv}>
        <Link className={styles.linksLeft} to="/login">
          Entre
        </Link>
        <Link className={styles.linksRight} to="/register">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
