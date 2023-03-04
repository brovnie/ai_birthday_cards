import React, { useRef } from 'react'
import { Input } from '../../components'
import {getRandomPrompt} from "../../utils";

const ImageForm = (props) => {
    const textInput = useRef("");

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
        <button type="submit" >Find Image</button>
        <p><button onClick={promptHandler} type="button" >Click here</button> for inspiration</p>
    </form>
  )
}
export default ImageForm
