import React, { useRef, useState } from 'react'
import { Input, Image, Loader } from '../../components'
import preview from "../../assets/preview.png";
import { getRandomPrompt } from '../../utils';

const GenerateImage = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(preview);
    const promptInput = useRef("");

    const promptHandler = () => {
        promptInput.current.value = getRandomPrompt(promptInput.current.value);
    }

    const generateCard = async () => {
        if(promptInput.current.value === "" || promptInput.current.value === undefined) return;
        try {
            setIsLoading(true);
            const url = 'http://localhost:8080/api/v1/dalle';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({prompt: promptInput.current.value })
            });

            const data = await response.json();
            const generatedImage = `data:image/jpeg;base64, ${data.photo}`;
            setImage(generatedImage);
            props.image(generatedImage);
            props.imageText(promptInput.current.value);
        } catch (error) {
            console.log(error);
            alert(error);
        }
        setIsLoading(false);
    }

  return (
    <div>
        <Image
            alt={promptInput}
            src={image}
            width="250px"
            height="250px"
        > 
            { (isLoading) && <Loader />}
        </Image>
        <Input 
            ref={promptInput}
            label= {{
                text: "Search AI image",
                hidden: false
            }}
            input={{
                id: 'image_text',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Example: Green birthday card with yellow heards",
                className: "col-span-8"
            }}
        />
        <p> 
            <button onClick={promptHandler} type="button"> Click here </button> 
        </p>
        <button type="button" onClick={generateCard} >Generate Card</button>
    </div>
  )
}

export default GenerateImage
