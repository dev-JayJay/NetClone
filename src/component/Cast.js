import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Cast({ data }) {

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
        }
    }

  return(
    <div>
        <Swiper
        breakpoints={breakpoints}
        spaceBetween={20}
        navigation={{
            clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className='w-full md:w-full lg:-width'
        >

        {
            data.cast.map((items) => {
                return(
                    <SwiperSlide key={items.id} className='relative h-68'>
                        <img src={`https://image.tmdb.org/t/p/w500${items.profile_path}`}
                        alt={items.name}
                        className='rounded-lg'
                        />
                        <div className='flex flex-row rounded-lg text-center justify-around absolute top-2 left-24 lg:left-36 bg-slate-900 blur-10 opacity-60 z-10'>
                        <p className=' text-white w-16 h-7 font-Kenio text-1xl'>{ Math.floor(items.popularity) }k likes</p>
                        </div>
                        <div className='bg-slate-900 blur-10 opacity-60 w-full absolute z-10 bottom-0 items-center justify-evenly'>
                            <h1 className='text-white text-center text-1xl w-48 font-Kenio bold'>{ items.name }</h1>
                            <p className='text-Ared font-mono bold text-center'>as</p>
                            <p className='text-center font-Kenio text-white'>{ items.character }</p>
                        </div> 
                    </SwiperSlide>
                );
            })
        }

        </Swiper>
    </div>
  )
}

export default Cast
