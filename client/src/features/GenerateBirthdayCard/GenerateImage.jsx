import React, { useRef, useState } from 'react'
import { Input, Image, Loader, Button } from '../../components'
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
    <div className="mb-5">
        <Image
            wrapperCss="m-auto my-5 rounded-xl overflow-hidden border border-[1px] shadow-md md:m md:min-w-[450px] md:min-h-[450px] md:ml-0"
            image= {{
                alt: promptInput,
                src: image,
                width: "250px",
                height: "250px"
            }}
        > 
            { (isLoading) && (
                <div className='absolute w-full h-full flex justify-center items-center z-10 bg-gray-200 opacity-80'>
                    <Loader />
                </div>
                )}
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
                cssclass: "col-span-8 mt-3"
            }}
        />
        <div className="flex items-center pt-5 pb-5 space-x-3">
            <p className="flex-1 flex-grow md:grow-0 min-w-[20ch]">Need some inspiration?</p>
            <Button type="button" onClick={promptHandler} bgcolor="bg-gray-100" css="!w-auto !text-neutral-500 px-3 font-bold !text-base !px-7 !py-2 ">Generate Random Text</Button>
        </div>
        <div className="md:flex justify-start">
                <Button type="button" onClick={generateCard} bgcolor="bg-green-600" css="">Generate Image</Button>
        </div>
        <hr className="mt-5"/>
    </div>
  )
}

export default GenerateImage
