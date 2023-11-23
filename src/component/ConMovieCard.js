import React from 'react';
import Fetch from './Fetch';
import MovieCard from './MovieCard';
import Loading from './Loading';

function ConMovieCard ({handleDataFromChild, filteResult}) {

    const { data, loading, error } = Fetch('https://api.themoviedb.org/3/discover/movie/?api_key=d1b91924e3973009856fdd71a98f6082');


    return(
        <div>
            {error && <div className='mt-20 mb-5 text-center'>{error}</div>}
            { loading && <div><Loading /></div> }
            { data && <MovieCard data={data} handleDataFromChild={handleDataFromChild} filteResult={filteResult} />}
        </div>
    );
}

export default ConMovieCard;