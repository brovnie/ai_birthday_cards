import React from 'react'
import SingleImage from './SingleImage'

const Grid = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">  
      <SingleImage/>
    </div>
  )
}

export default Grid
