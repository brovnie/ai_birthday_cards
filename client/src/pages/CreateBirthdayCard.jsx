import React, {useRef,useState} from 'react'
import {getRandomPrompt} from "../utils/index";
import { Input } from '../components';

const CreateBirthdayCard = () => {
  const handleClick = () =>{
    console.log(getRandomPrompt("")) 
  }
  const searchInput = useRef();

  return (
    <section>
      <h2>Generate your own AI Bithday card</h2>
      <p>Step 1: Generate Image</p>
      <button onClick={handleClick}>Inspiration</button>
      <p>Step 2: Send to your friend</p>
    </section>
  )
}

export default CreateBirthdayCard
