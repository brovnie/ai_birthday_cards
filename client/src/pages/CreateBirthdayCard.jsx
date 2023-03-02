import React from 'react'
import {getRandomPrompt} from "../utils/index";

const CreateBirthdayCard = () => {
  const handleClick = () =>{
    console.log(getRandomPrompt("")) 
  }
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
