import React from 'react'
import Fetch from '../Fetch'
import Latest from './Latest';
import Loading from '../Loading';



function ConLatest() {

    const {data, loading , error} = Fetch('https://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07');

    if ( loading){
        return <div><Loading /></div>
    }
    if (error){
        return <div className='mt-20 mb-5 text-center'>{ error }</div>
    }

  return (
    <div>
      { data && <Latest data={ data } /> }
    </div>
  )
}

export default ConLatest
