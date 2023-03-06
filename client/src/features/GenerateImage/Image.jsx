import React from 'react'
import { Loader } from '../../components';

const DisplayImage = (props) => {
  return (
    <div className="relative w-50 h-50">
    { (props.isLoading) && <Loader />}

      <img src={props.img} alt="Ai generated Image"/>
    </div>
  )
}

export default DisplayImage
