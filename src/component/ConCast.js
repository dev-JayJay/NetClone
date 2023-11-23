import React from 'react'
import Cast from './Cast'
import Fetch from './Fetch'
import Loading from './Loading';
import { useParams } from 'react-router-dom';


function ConCast() {
    const { id } = useParams();
    const { data, loading , error} = Fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d1b91924e3973009856fdd71a98f6082`)
    return(
        <>
        { loading && <div><Loading /></div> }
        { error && <div>{error}</div> }
        { data && <Cast data={data} /> }
        </>
    );
}
export default ConCast;