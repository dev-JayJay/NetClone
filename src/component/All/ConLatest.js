import React from 'react'
import Fetch from '../Fetch'
import Latest from './Latest';
import Loading from '../Loading';



function ConLatest() {

    const {data, loading , error} = Fetch('https://api.themoviedb.org/3/person/popular/?api_key=d1b91924e3973009856fdd71a98f6082');

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
