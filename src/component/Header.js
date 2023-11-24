import { Link } from 'react-router-dom';
import { MdList } from "react-icons/md";
import { BiSearchAlt, BiSolidXCircle } from "react-icons/bi";
import { useState } from "react";


function Header({ handleSearch}) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    }

    return(
      
      <>
      <div className='fixed z-50 shadow-md top-0 w-full mb-72 sm:flex sm:items-center sm:justify-center md:w-full justify-between h-16 bg-[#212532]'>
        <div className='flex justify-between space-x-20'> {/* container div */}
        <header className='mt-2 ml-5 sm:flex flex-row text-Ared font-Kenio font-bold text-size md:mt-0 md:ml-0'>NetClone</header>
        <div className='sm:flex sm:flex-row hidden'>
          <button className="w-9 h-9 bg-Ared text-white border  hover:bg-transparent">
            <BiSearchAlt className='text-1xl mx-auto'/>
            </button>
          <input type='text'
          placeholder='Search for movies'
          onChange={handleSearch}
          className='sm:w-60 sm:h-9 rounded-tr-lg rounded-br-lg w-55'
          />
        </div>
        <nav className=' lg:flex lg:flex-row'>
          <ul className={`lg:flex lg:flex-row lg:justify-between lg:text-size lg:space-x-4 lg:ml-10 ${ clicked ? 'flex flex-col fixed top-16 left-0 w-full text-center items-center opacity-80 bg-[#212532]' : 'hidden'}`}>
            <li>
              <Link className='text-white text-1xl lg:ml-10 font-bold font-Croissant transition-0.3s hover:text-red-700 hover:shadow-lg ' to='/'>Home</Link>
            </li>

            <li>
              <Link className='text-white text-1xl lg:ml-10 font-bold font-Croissant' to='/Movies'>Movies</Link>
            </li>

            <li>
              <Link className='text-white text-1xl lg:ml-10 font-bold font-Croissant' to='/About'>About</Link>
            </li>

            <li>
              <Link className='text-white text-1xl lg:ml-10 font-bold font-Croissant pb-5 lg:pb-0 lg:mr-9' to='/Contact'>Contact </Link>
            </li>
          </ul>
          {/* <div className='hidden lg:flex lg:flex-row lg:justify-between lg:space-x-14 lg:ml-2'>
            <Link to='/Login' className='text-4xl text-white'><BiSolidUserPin /></Link>
            <Link to='/Like' className=''><div className='flex flex-row relative'><FaHeart className='text-white text-4xl' />
            </div>
            </Link>
          </div> */}
        </nav>
        <button onClick={handleClick} className='block top-3 right-4 fixed text-white text-4xl lg:hidden'>
            {clicked ? <BiSolidXCircle /> : <MdList />}
          </button>
      </div>
        </div>
      </>
    );
  }
  
  export default Header;
  