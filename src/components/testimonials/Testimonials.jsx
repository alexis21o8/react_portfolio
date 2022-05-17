import { testiList } from './TestiList';
import './testimonials.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Others</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className='container testimonials_container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testiList.map((person) => (
          <SwiperSlide className='testimonial' key={person.id}>
            <div className='person_avatar'>
              <img src={person.img} alt={person.name} />
            </div>
            <h5 className='person_name'>{person.name}</h5>
            <h6 className='person_title'>{person.title}</h6>
            <small className='person_review'>{person.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
};

export default Testimonials;