import React, { useRef, useState } from 'react'
import GenerateImage from './GenerateImage';
import { Input } from '../../components';

const BirthdayCardForm = () => {
    const nameInput = useRef("");
    const wishesInput = useRef("");
    const [imageText, setImageText] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <Input 
            ref={nameInput}
            label= {{
                text: "Give your name",
                hidden: false
            }}
            input={{
                id: 'name',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Enter name",
                className: "col-span-8"
            }}
        />
        <Input 
            ref={wishesInput}
            label= {{
                text: "Do you want to add birthday wishes?",
                hidden: false
            }}
            input={{
                id: 'wishes',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Type birthday wishes...",
                className: "col-span-8"
            }}
        />
        <GenerateImage
            imageText={setImageText}
            image={setImage}
        />
        <button type="submit"> Save Card</button>
    </form>
  )
}

export default BirthdayCardForm
