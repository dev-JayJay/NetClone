import React from 'react'
import { Bars } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='mx-auto text-center items-center align-middle justify-center mt-20'>
      {/* <h1 className='text-white text-2xl mt-20 font-Croissant'>Loading please  wait ...</h1> */}
      <Bars
      height="80"
      width="80"
      color="#fff"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      className='mx-auto'
      />
    </div>
  )
}

export default Loading
