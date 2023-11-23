import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import SubHeader from './SubHeader';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineUpcoming } from 'react-icons/md';


function MovieSlide({ data }) {

        
    const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  };


  return(
    <div>
      <SubHeader title='Upcoming On Net-Clone' icons={ <MdOutlineUpcoming /> }/>
      <Swiper
      breakpoints={breakpoints}
      spaceBetween={20}
      navigation={{
        clickable: true,
      }}
      modules={[Navigation]}
      className='m-10 w-full overflow-hidden'
      >
        
        {
          data.results.map((item) => {
            return(
                <SwiperSlide key={item.id} className='relative'>
                  <Link to={`/data.results/${item.id}`}>
                   <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt='item.title'
                    className='h-48 w-full rounded-lg object-cover lg:h-56'
                    /> 
                        <div className='flex flex-row bg-slate-900 blur-10 opacity-60 w-full absolute z-10 bottom-0 items-center justify-evenly'>
                            <h1 className='text-white text-2xl w-48 font-Croissant bold'>{ item.title }</h1>
                            <p className='bg-Ared rounded-sm text-white w-7 h-6 text-2xl'><FaHeart className='mx-auto mt-auto' /></p>
                        </div> 
                  </Link> 
                </SwiperSlide>
            );
          })
        }
      </Swiper>

    </div>
  );
  }

export default MovieSlide;
