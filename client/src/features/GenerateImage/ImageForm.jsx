import React, { useRef } from 'react'
import { Input } from '../../components'
import {getRandomPrompt} from "../../utils";

const ImageForm = (props) => {
    const textInput = useRef("");
    const nameInput = useRef("");
    const wishesInput = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const promptHandler = () => {
        textInput.current.value = getRandomPrompt(textInput.current.value);
    }

    const generateCard = async () => {
        if(textInput.current.value === "" || textInput.current.value === undefined) return;
        try {
            props.isLoading(true);
            const url = 'http://localhost:8080/api/v1/dalle';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({prompt: textInput.current.value })
            });

            const data = await response.json();
            const image = `data:image/jpeg;base64, ${data.photo}`;
            props.img(image);

        } catch (error) {
            console.log(error);
            alert(error);
        }
        props.isLoading(false);
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
        <button type="button" onClick={generateCard} >Generate Card</button>
        <button type="submit"> Save Card</button>
    </form>
  )
}
export default ImageForm
