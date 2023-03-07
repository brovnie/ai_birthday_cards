import React, { useRef, useState } from 'react'
import GenerateImage from './GenerateImage';
import { Input, Button } from '../../components';


const BirthdayCardForm = () => {
    const senderInput = useRef("");
    const reciverInput = useRef("");
    const wishesInput = useRef("");
    const [imageText, setImageText] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <form onSubmit={handleSubmit} className="">
        <Input 
            ref={senderInput}
            wrapperCss="md:flex-row mb-3"
            label= {{
                text: "From:",
                hidden: false
            }}
            input={{
                id: 'name',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Enter your name",
                cssclass: "col-span-8 mt-2"
            }}
        />
                <Input 
            ref={reciverInput}
             wrapperCss="md:flex-row mb-3"
            label= {{
                text: "To:",
                hidden: false
            }}
            input={{
                id: 'name',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Enter celebrants name ",
                cssclass: "col-span-8 mt-2 mb-3"
            }}
        />
        <Input 
            ref={wishesInput}
            label= {{
                text: "Do you want to add birthday wishes? (optional)",
                hidden: false
            }}
            input={{
                id: 'wishes',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Type birthday wishes...",
                cssclass: "col-span-8 mt-2"
            }}
        />
        <GenerateImage
            imageText={setImageText}
            image={setImage}
        />
        <Button type="submit" bgcolor="bg-green-600">Save Card</Button>
    </form>
  )
}

export default BirthdayCardForm
