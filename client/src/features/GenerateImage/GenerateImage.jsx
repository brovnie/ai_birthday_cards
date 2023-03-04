import React from 'react'
import Image from "./Image";
import ImageForm from './ImageForm';

const GenerateImage = () => {
  return (
    <div className='mt-5 mb-5'>
    <p>Step 1. Find image</p>
        <ImageForm/>
        <Image isLoading={false}/>
    </div>
  )
}

export default GenerateImage
