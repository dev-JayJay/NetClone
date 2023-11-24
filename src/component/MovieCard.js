import SubHeader from './SubHeader';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TbHeartRateMonitor } from 'react-icons/tb';


function MovieCard({ data }) {
    

    // console.log('the filtered result is' + filteResult);
  return (
    <div>
        <SubHeader title='Top Rated Movies On Net-Clone' icons={ <TbHeartRateMonitor />} />
       <div className='flex flex-row flex-wrap items-center justify-center'>
       {
            data.results.slice(3, 13).map((item) => {
                return(
                    <div key={item.id} className='relative w-44 m-2 
                     lg:m-2 lg:w-56 lg:h-56'>
                        <Link to={`/data.results/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt='item.poster_path'
                        className='w-full h-full object-cover rounded-lg'
                        /> 
                        <div className='flex flex-row bg-slate-900 blur-10 opacity-60 w-full absolute z-10 bottom-0 items-center justify-evenly'>
                            <h1 className='text-white text-2xl w-48 font-Croissant bold'>{ item.title }</h1>
                            <p className='bg-Ared rounded-sm text-white w-7 h-6 text-2xl'><FaHeart className='mx-auto mt-auto' /></p>
                        </div>
                        </Link>                      
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default MovieCard;