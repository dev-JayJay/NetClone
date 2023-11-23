import React from 'react'

function Video({data}) {

  const videoKey = data.results[0]?.key //display the first instance of the outcome
  const videoLink = `https://www.youtube.com/embed/${videoKey}`

  return (
    <div className='text-center mx-auto mt-5'>
      <h1 className='text-center text-white text-2xl underline m-4'>Trailer</h1>
      <div>
        <iframe
       width="600"
       height="315"
       src={videoLink}
       title="Video Player"
       allowFullScreen
       className='rounded-lg w-full md:text-center md:mx-auto lg:w-width lg:text-center lg:mx-auto'
      >
      </iframe>
      </div>
    </div>
  )
}

export default Video
