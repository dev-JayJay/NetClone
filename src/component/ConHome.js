import Home from './Home';
import Fetch from './Fetch';
import Loading from './Loading';

function ConHome () {

    const { data, loading, error } = Fetch('https://api.themoviedb.org/3/discover/movie/?api_key=d1b91924e3973009856fdd71a98f6082');

    return(
        <div>
            { loading && <div><Loading /></div> }
            { error && <div className='mt-20 mb-5 text-center'>{ error }</div> }
            { data && <Home data={data} /> }
        </div>
    )
}


export default ConHome;