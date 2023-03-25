import React from 'react'
import { Card } from '../../layouts'
import { Image } from '../../components'
import preview from "../../assets/preview.png";

const SingleImage = (props) => {
  console.log(props)
  return (
    <Card>
      <Image
        image= {{
            alt: props.name,
            src: props.photo,
            width: "250px",
            height: "250px"
        }}

      />
    </Card>
  )
}

export default SingleImage