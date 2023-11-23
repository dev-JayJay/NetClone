import React from 'react'
import Fetch from '../Fetch'
import Loading from '../Loading';
import TvSeries from './TvSeries';

function ConTvSeries() {

    const {data, loading , error} = Fetch('https://api.themoviedb.org/3/discover/movie/?api_key=d1b91924e3973009856fdd71a98f6082');

    if ( loading){
        return <div><Loading /></div>
    }
    if (error){
        return <div className='mt-20 text-center'>{ error }</div>
    }

  return (
    <div>
      { data && <TvSeries data={ data } /> }
    </div>
  )
}

export default ConTvSeries
