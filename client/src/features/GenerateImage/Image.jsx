import React from 'react'
import preview from "../../assets/preview.png";
import { Loader } from '../../components';

const DisplayImage = (props) => {
  return (
    <div className="relative w-50 h-50">
    { (props.isLoading) && <Loader />}

      <img src={preview} alt="Ai generated Image"/>
    </div>
  )
}

export default DisplayImage
