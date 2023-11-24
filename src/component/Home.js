
import 'swiper/swiper-bundle.css';
import SubAbout from './SubAbout';
import { SlLike } from 'react-icons/sl';
import { Autoplay } from 'swiper/modules';
import ConMovieCard from './ConMovieCard';
import ConMovieSlide from './ConMovieSlide';
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineDateRange } from 'react-icons/md';
import { FaHeart, FaCloudDownloadAlt } from 'react-icons/fa';

 function Home({ data }) {

console.log(data); 

  return (
    <>
    <Swiper
    className=' w-full mx-auto mt-16 md:w-full lg:w-width'
    direction='vertical'
    slidesPerView={1}
    loop={true}
    speed={1000}
    modules={[Autoplay]}
    autoplay={{ delay: 1000, disableOnInteraction: false }}
    style={{ height: "400px" }} // fixed height for the container
  >
    { data.results.map((item) => {
      return (
        <SwiperSlide key={item.id} className="relative w-full h-full flex items-center rounded-lg shadow-lg justify-center">
             <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt='beast'
              className='w-full h-full object-cover relative rounded-lg'
            />        
            <div className='absolute z-10 top-20 left-10 lg:top-28 lg:left-46'>
              <h1 className='text-4xl text-white bold font-Kenio'>{ item.title }</h1>
              <div className='flex flex-row m-5 justify-around'>
                <p className='text-white text-1xl font-Kenio flex flex-row lg:mr-3'> <FaCloudDownloadAlt className='text-3xl text-Ared' /> : { item.vote_count }k</p>
                <p className='text-white ml-2 font-Kenio flex flex-row  lg:mr-3'> <SlLike className='text-2xl text-Ared' /> : { item.vote_average }k</p>
                <p className='text-white flex flex-row font-Kenio'> <MdOutlineDateRange className='text-2xl text-Ared' /> : { item.release_date } </p>
              </div>
  
              <div  className='mt-10 w-64 item-center flex flex-row justify-around'>
                <button className='w-36 text-2xl text-white font-Kenio bg-Ared rounder-lg'>Watch</button>
                <button className='w-10 bg-main opacity-60 rounded-lg text-2xl'><FaHeart className='text-white ml-2'/></button>
              </div>
            </div>
        </SwiperSlide>
      );
    })}
  </Swiper> 
{/* imported some component to the home page */}
  <ConMovieCard /> 
  <SubAbout />
  <ConMovieSlide /> 
    </>
  ) 
}

export default Home;

