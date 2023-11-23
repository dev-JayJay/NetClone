import React from 'react'
import ConTvSeries from './All/ConTvSeries'
import ConUpComing from './All/ConUpComing'
import ConLatest from './All/ConLatest'

function Movies() {
  return (
    <div>
      {/* importing all kinds of moives component */}
      <ConUpComing />
      <ConTvSeries />
      <ConLatest />
    </div>
  )
}

export default Movies
