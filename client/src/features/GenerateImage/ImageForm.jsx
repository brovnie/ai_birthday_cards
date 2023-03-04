import React, { useRef } from 'react'
import { Input } from '../../components'
import {getRandomPrompt} from "../../utils";

const ImageForm = (props) => {
    const textInput = useRef("");
    const nameInput = useRef("");
    const cardText = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.isLoading(true);
    }

    const promptHandler = () => {
        textInput.current.value = getRandomPrompt(textInput.current.value);
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
                id: 'generate',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Enter name",
                className: "col-span-8"
            }}
        />
        <Input 
            ref={cardText}
            label= {{
                text: "Do you want to add birthday wishes?",
                hidden: false
            }}
            input={{
                id: 'generate',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Type birthday wishes...",
                className: "col-span-8"
            }}
        />
        <Input 
            ref={textInput}
            label= {{
                text: "Search AI image",
                hidden: false
            }}
            input={{
                id: 'generate',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Example: Green birthday card with yellow heards",
                className: "col-span-8"
            }}
        />
        <p>Need inspiration for the image? <button onClick={promptHandler} type="button" >Click here</button></p>
        <button type="submit" >Generate Card</button>
    </form>
  )
}
export default ImageForm
