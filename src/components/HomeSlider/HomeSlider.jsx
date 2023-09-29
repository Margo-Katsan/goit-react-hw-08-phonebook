import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ImUserPlus, ImPencil2 } from 'react-icons/im';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GiArchiveResearch } from 'react-icons/gi';
import css from './HomeSlider.module.css'

// Import Swiper styles
import 'swiper/css';
import { BsDisplay } from 'react-icons/bs';

export const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
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
      onSlideChange={() => console.log('slide change')}
      autoplay={{
          delay: 1500,
          disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <ImUserPlus className={`${css.icon} ${css.iconAddUser}`} size={240} color='#d9d9d9' />
        <p className={css.text}>Add a contact to your phone book</p>
      </SwiperSlide>
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <ImPencil2 className={css.icon} size={200} color='#d9d9d9' />
        <p className={css.text}>Change a contact's name or phone number</p>
      </SwiperSlide>
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <RiDeleteBin5Fill className={css.icon} size={200} color='#d9d9d9' />
        <p className={css.text}>Delete a contact from your phone book</p>
      </SwiperSlide>
      <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} className={css.slide}>
        <GiArchiveResearch className={css.icon} size={200} color='#d9d9d9' />
        <p className={css.text}>Search for a contact by name</p>
      </SwiperSlide>
    </Swiper>
  );
};