import React from 'react'
import Fetch from './Fetch'
import Loading from './Loading'
import MovieSlide from './MovieSlide';

function ConMoiveSlide() {

    const { data, loading, error } = Fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d1b91924e3973009856fdd71a98f6082');

  return (
    <div>
      { error && <div className='mt-20 mb-5 text-center'>{ error }</div>}
      {loading && <div><Loading /></div>}
      { data && <MovieSlide data={data} /> }
    </div>
  )
}

export default ConMoiveSlide
