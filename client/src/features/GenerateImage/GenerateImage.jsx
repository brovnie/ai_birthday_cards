import React, {useState} from 'react'
import Image from "./Image";
import ImageForm from './ImageForm';
import preview from "../../assets/preview.png";

const GenerateImage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(preview);
  return (
    <div className='mt-5 mb-5'>
    <p>Step 1. Find image</p>
        <ImageForm isLoading={setLoading} img={setImage}/>
        <Image isLoading={loading} img={image}/>
    </div>
  )
}

export default GenerateImage
