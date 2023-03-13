import React, {useEffect, useState} from 'react'
import SingleImage from './SingleImage'
import { Loader } from "../../components";

const Grid = (props) => {
  const [birthdayCards,setBirthdayCards] = useState([{"name":"test"}]);
  const [isLoading, setisLoading] = useState(props.isLoading);

  useEffect(() => { fetchBirthdayCards() }, []);
      
  const fetchBirthdayCards = async () => {
    let count = 0;    
    setisLoading(true);
    try {
      const url = 'http://localhost:8080/api/v1/birthday_card'
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
      })

      if(response.ok) {
        const result = await response.json();
        const cardList = result.data.reverse();
        setBirthdayCards(cardList);
      }
       setisLoading(false);
    } catch (error) {
      console.log(error);
       setisLoading(false);
    } 
  }
  
  const RenderImages = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((birthdayCard) => <SingleImage  key={Math.random()} {...birthdayCard} /> )
    );
  }}


  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">  
    { (isLoading) && <Loader/>  }
    { (!isLoading) && (
        <RenderImages
          data={birthdayCards}
          title="No birthday cards founded"
        />
    ) }
    </div>
  )
}

export default Grid
