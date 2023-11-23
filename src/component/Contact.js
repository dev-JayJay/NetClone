import React from 'react'
import CompanyData from './CompanyData.json'
import SubHeader from './SubHeader'
import login from '../images/login.jpg';

function Contact() {
  return (
    <div>
      <div>
      <SubHeader title='Net-Clone Founders' />
       <div className='flex flex-row flex-wrap justify-center sm:justify-evenly lg:justify-evenly lg:w-width mx-auto'>
       {
          CompanyData.founders.map((items, id) => {
            return(
              <div key={id} className='relative text-white w-72 mb-12 lg:mb-3'>
                <img src={login} alt={'login.name'} 
                className='mx-auto w-64 h-36 rounded-lg'
                />
                <div className='flex flex-row flex-wrap justify-around sm:justify-between lg:justify-around m-2'>
                <h1 className='text-white font-Kenio'>{ items.name }</h1>
                <h1 className='text-white font-Kenio'>{ items.position }</h1>
                </div>
                <div className='text-center text-white font-Kenio'>
                  <p>{ items.bio }</p>
                </div>
                <h1 className='absolute font-Kenio left-4 top-82 m-2 border border-Ared rounded-2xl'>Net-clone { items.position }</h1>
              </div>
            )
          }) 
        }
       </div>
      <SubHeader title='Projects Done By Net-Clone' />
       <div className='flex flex-row flex-wrap justify-center lg:justify-evenly lg:w-width mx-auto'>
       {
          CompanyData.products.map((items, id) => {
            return(
              <div key={id} className='border w-72 rounded-md mb-4'>
                <div className='text-center text-white font-Kenio'>
                <h1 className='underline text-2xl'>{ items.name }</h1>
                <h1>{ items.description }</h1>
                </div>
              </div>
            );
          })
        }
       </div>
        <SubHeader title='Locate Net-Clone @' />
       <div className='flex flex-row flex-wrap justify-evenly lg:w-width mx-auto '>
       {
          CompanyData.locations.map((items, index) => {
            return(
              <div key={index} className=' w-72 mb-4'>
                <div className='flex flex-col text-white font-Kenio'>
                <h1>City: { items.city }</h1>
                <h1> State: { items.state }</h1>
                <h1>Country: { items.country }</h1>
                </div>
              </div>
            )
          })
        }
       </div>
      </div>
    </div>
  )
}

export default Contact
