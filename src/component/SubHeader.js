import React from 'react'

function SubHeader({ title, icons }) {
  return (
    <div className='flex flex-row text-white text-2xl font-Kenio text-center justify-center mt-20 mb-8'>
        <p className='mr-2 text-4xl'>{ icons }</p>
      <h1>{ title }</h1>
    </div> 
  )
}

export default SubHeader
