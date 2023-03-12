import React, { useRef, useState } from 'react'
import GenerateImage from './GenerateImage';
import { Input, Button, Loader } from '../../components';


const BirthdayCardForm = () => {
    const senderInput = useRef("");
    const reciverInput = useRef("");
    const wishesInput = useRef("");
    const [imageText, setImageText] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();        
        
        const form = {
            name: senderInput.current.value,
            celebraitsName: reciverInput.current.value,
            wishes: wishesInput.current.value,
            photo: image
        }

        try {
            setIsLoading(true);
            const url = "http://localhost:8080/api/v1/birthday_card"
            const response = await fetch(url , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
            }) 
            await response.json();
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }

    }

  return (
    <form onSubmit={handleSubmit} className="md:min-w[500px] max-w-[837px]" >
 
        <Input 
            ref={senderInput}
            wrapperCss=" mb-3 md:mb-5"
            label= {{
                text: "From:",
                hidden: false
            }}
            input={{
                id: 'name',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Enter your name",
                cssclass: "col-span-8 mt-2",
                required: true
            }}
        />
                <Input 
            ref={reciverInput}
             wrapperCss="mb-3 md:mb-5"
            label= {{
                text: "To:",
                hidden: false
            }}
            input={{
                id: 'name',
                type: 'text',
                pattern: "^[^ ].+[^ ]$",
                placeholder: "Enter celebrants name ",
                cssclass: "col-span-8 mt-2 mb-3",
                required: true
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
                cssclass: "col-span-8 mt-3 mb-3",
                required: true
            }}
        />
     
    
        <GenerateImage
            imageText={setImageText}
            image={setImage}
        />
        <Button type="submit" bgcolor="bg-blue-600 flex items-center justify-center" css="md:flex md:mr-0 md:ml-auto">
        { (isLoading) && (
            
                <Loader 
                css="scale-[0.65] absolute left-[25%] md:left-[-3px]"
                />
            
            ) } Save Birthday Card
        </Button>
        
    </form>
  )
}

export default BirthdayCardForm
