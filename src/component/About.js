import React from 'react'
import AboutData from './data'
import SubHeader from './SubHeader';
import { FaHeart } from 'react-icons/fa'
import login from '../images/login.jpg';
import SubAbout from './SubAbout';

export default function About() {

  return (
    <div>
      <SubHeader title='About Net-Clone' icons={<FaHeart />} />
      <SubAbout className='mt-10'/>
      <div className='flex flex-row flex-wrap justify-center lg:justify-between'>
        {
          AboutData.people.map((item, index) => {
            return(
              <div key={index} className='relative text-white border rounded-xl mb-4 h-64 w-64'>
                <img src={login} alt={item.name} 
                className='absolute rounded-full w-16 top-4 left-4'
                />
                <h1 className='absolute left-28 top-4 border border-Ared rounded-2xl'>{ item.name }</h1>
                <p className='absolute top-12 left-24 underline space-1'> { item.position }</p>
                <p className='absolute top-28 text-center'> {item.bio }</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
