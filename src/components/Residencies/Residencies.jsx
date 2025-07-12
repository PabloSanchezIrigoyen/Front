import './Residencies.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common.js';
import { Link } from 'react-router-dom';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>Nuestras Mejores Opciones</span>
          <span className='primaryText'>Cabañas Populares</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Link to={`/cabanas/${card.id}`} className='r-card-link'>
                <div className='flexColStart r-card'>
                  <img src={card.image} alt={card.name} />

                  <span className='secondaryText r-price'>
                    <span style={{ color: 'orange' }}>MXN $</span>
                    <span>{card.price}</span>
                  </span>

                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-buttons'>
      <button aria-label="Previous slide" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button aria-label="Next slide" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
