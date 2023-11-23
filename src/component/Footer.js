import React from 'react';
import { Link } from 'react-router-dom';
import login from '../images/login.jpg';

function Footer() {
  return (
    <div className='bg-[#212532]'>
      <div className='conatiner flex flex-row flex-wrap justify-around'>
        <div className='col-1-address'>
        <div className='m-2'>
            <img src={login}
            alt='paper2.jpg'
            className='w-20 h-20 rounded-full object-cover'
            />
            <p className='text-white font-Croissant'>Admin:<span className='text-Ared font-Kenio'> Jay_Jay</span></p>
        </div>
        <div className='Address text-white font-Kenio'>
            <h1 className='text-2xl font-Croissant'>Address</h1>
            123 Serenity Lane<br/>
            Tranquliville, Blissfull Country<br/>
            Harmonyville, Peaceful Country<br/>
            Postcode:Zen 000
        </div>
        </div>

        <div className='col-2-menu'>
        <nav>
          <ul className='flex flex-col mt-10'>
            <li className='mb-4'>
              <Link className='text-white text-1xl font-bold font-Croissant transition-0.3s hover:text-red-700 hover:shadow-lg ' to='/'>Home</Link>
            </li>

            <li className='mb-4'>
              <Link className='text-white text-1xl font-bold font-Croissant' to='/Movies'>Movies</Link>
            </li>

            <li className='mb-4'>
              <Link className='text-white text-1xl font-bold font-Croissant' to='/About'>About</Link>
            </li>

            <li className='mb-4'>
              <Link className='text-white text-1xl font-bold font-Croissant mr-9' to='/Contact'>Contact </Link>
            </li>
          </ul>
        </nav>
        </div>
      
        <div className='col-3-form'>
        <form>
          <div className='flex flex-col'>
          <label className='text-white text-1xl font-Kenio'>Name :</label>
          <input placeholder='Full Name'
          className='w-52 h-6 rounded-3xl shadow-2xl p-2'
           />
          <label className='text-white text-1xl font-Kenio'>Email :</label>
          <input placeholder='example@gmail.com'
          className='w-64 h-7 rounded-3xl shadow-2xl p-2'
           />
          <label className='text-white text-1xl font-Kenio'>Request :</label>
          <input placeholder='enter your request here' 
          className='w-64 h-20 rounded-3xl shadow-2xl pb-12 pl-2'
          />
          <button className='border bg-red-700 text-white font-Kenio h-10 w-20 mx-auto mt-1 rounded-2xl'>Submit</button>
          </div>
        </form>
        </div>

        <div className=' col-4 w-48 h-12 mt-20 border border-white rounded-full'>
        <h1 className='text-Ared text-center font-Kenio font-bold text-size'>Net-Clone</h1>
        </div>
      </div>
      {/* right reserved */}
      <div className='text-center m-2'>
        <p className='text-white font-Croissant m-2'>Help line Number : <span className='text-Ared font-Kenio'>+234 800 1200 1200</span></p>
        <p className='font-kenio text-white mt-2 mb-1'>2023 All Right Reserver Design By Dev-Jay-Jay</p>
      </div>
    </div>
  )
}

export default Footer
