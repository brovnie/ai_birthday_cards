import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-gray">
      {props.children}
    </div>
  )
}

export default Card
