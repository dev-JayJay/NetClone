import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='text-center justify-center align-center mt-20'>
      {/* <h1 className='text-white text-2xl mt-20 font-Croissant'>Loading please  wait ...</h1> */}
      <RotatingLines
      StrockColor='gray'
      StrockWidth='9'
      aminationDuration='0.75'
      width='96'
      visible={true}
      />
    </div>
  )
}

export default Loading
