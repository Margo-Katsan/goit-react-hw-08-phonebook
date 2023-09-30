import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ImUserPlus } from 'react-icons/im';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { GiArchiveResearch } from 'react-icons/gi';
import css from './HomeSlider.module.css'

// Import Swiper styles
import 'swiper/css';

export const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <ImUserPlus className={`${css.icon} ${css.iconAddUser}`} size={280} color='white' />
        <p className={css.text}>Add a contact to your phone book</p>
      </SwiperSlide>
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <GrEdit className={css.icon} size={240} color='white' />
        <p className={css.text}>Change a contact's name or phone number</p>
      </SwiperSlide>
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <RiDeleteBin5Fill className={css.icon} size={240} color='white' />
        <p className={css.text}>Delete a contact from your phone book</p>
      </SwiperSlide>
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <GiArchiveResearch className={css.icon} size={240} color='white' />
        <p className={css.text}>Search for a contact by name</p>
      </SwiperSlide>
    </Swiper>
  );
};