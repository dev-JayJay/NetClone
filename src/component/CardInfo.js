import React from 'react'
import Fetch from './Fetch';
import Loading from './Loading';
import ConCast from './ConCast';
import ConVideo from './ConVideo'
import SubHeader from './SubHeader';
import { SlLike } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { MdStarRate, MdBookmarkAdd } from 'react-icons/md';
import { BsDownload, BsFillPlayBtnFill, BsListStars  } from 'react-icons/bs'



function CardInfo() {

    const { id } = useParams();
    const { data:results, loading, error } = Fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d1b91924e3973009856fdd71a98f6082`);

    if(loading){
      return <div><Loading /></div>
    }
    if(error){
      return <div>{ error }</div>
    }

console.log(id);
console.log(results);
  
    return (
      <div>
        {results && (
            <section>
                <div className='container mt-20 mx-auto justify-center flex flex-row flex-wrap'>
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                    alt={results.title}
                    className='w-72 h-76 rounded-xl'
                    />
                    <div className='mt-20 ml-4'>
                        <div>
                          <h1 className='text-white mb-4 text-3xl font-kenio'>{results.title} <span>({results.release_date.slice(0,4)})</span></h1>
                          <div className='icons flex flex-row'>
                             <div>
                              <div className='flex flex-row'>
                                <div className='flex flex-col text-white text-1xl w-14 rounded-3xl justify-center text-center bg-Ared'>
                                  <p className='mx-auto font-Kenio'>{ Math.floor(results.popularity) }K<SlLike className='mx-auto' /></p>
                                </div>
                                <div className='text-white m-2 flex flex-col'>
                                  <p>User</p><span>Like's</span>
                                </div>
                                </div>
                             </div>
                            <div className='flex flex-row flex-wrap'>
                            <div className='bg-slate-900 text-2xl w-12 h-12 rounded-3xl m-2'><BsListStars className='text-white mx-auto mt-3' /></div>
                            <div className='bg-slate-900 text-2xl w-12 h-12 rounded-3xl m-2'><FaHeart className='text-white mx-auto mt-3' /></div>
                            <div className='bg-slate-900 text-2xl w-12 h-12 rounded-3xl m-2'><MdBookmarkAdd className='text-white mx-auto mt-3' /></div>
                            <div className='bg-slate-900 text-2xl w-12 h-12 rounded-3xl m-2'><MdStarRate className='text-white mx-auto mt-3' /></div>
                            <div className='mt-5 m-2 flex flex-row text-white bolder-1'> <BsFillPlayBtnFill className='mr-2 text-2xl' /><span className='text-1xl'>Play Trailer</span></div>
                            </div>
                          </div>
                        <div className='flex flex-col'>
                          <h2 className='text-white text-1xl m-3 bolder-1 font-mono space-1'>overview</h2>
                          <p className='w-full lg:w-width1 text-1xl text-white font-Kenio space-1'>{results.overview}</p>
                        </div>
                        </div>
                    </div>
                    <button className='flex lg:transform lg:-rotate-90 bg-Ared text-white text-2xl justify-center font-mono rounded-lg w-44 h-10 mt-28'><BsDownload className='mr-2'/>Download</button>
                </div>
                <ConVideo />
                <SubHeader title={`${results.title} Moive Cast`} />
            </section>
        )} 
        <ConCast />
      </div>
  )
}

export default CardInfo
