import React, {useState} from 'react'
import Image from "./Image";
import ImageForm from './ImageForm';

const GenerateImage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className='mt-5 mb-5'>
    <p>Step 1. Find image</p>
        <ImageForm isLoading={setLoading}/>
        <Image isLoading={loading}/>
    </div>
  )
}

export default GenerateImage
