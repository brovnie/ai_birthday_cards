import React, {useEffect, useState} from 'react'
import SingleImage from './SingleImage'

const Grid = (props) => {
      const [birthdayCards,setBirthdayCards] = useState(null);
      
      useEffect(() => {
      const fetchBirthdayCards = async () => {
        props.isLoading(true);

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
            setBirthdayCards(result.data.reverse());
          }

        } catch (error) {
          console.log(error);
        } finally {
          props.isLoading(false);
        }

      }

      fetchBirthdayCards();
    }, []);


  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">  
      <SingleImage
      
      />
    </div>
  )
}

export default Grid
