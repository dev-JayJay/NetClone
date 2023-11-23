import React from 'react';
import Fetch from './Fetch';
import Video from './Video.js';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

function ConVideo() {

    const { id } = useParams();
    const {data, loading , error} = Fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d1b91924e3973009856fdd71a98f6082`);

    if ( loading){
        return <div><Loading /></div>
    }
    if (error){
        return <div>{ error }</div>
    }


  return (
    <div>
    { data && <Video data={data} /> }
    </div>
  )
}

export default ConVideo
