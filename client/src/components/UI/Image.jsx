import React from 'react'

const Image = (props) => {
  return (
    <div className={`relative `} style={{width: `${props.width}`, height: `${props.height}` }}>
        {props.children}
      <img src={props.src} alt={props.alt} className="absolute w-100 h-100 insert-0 object-cover"/>
    </div>
  )
}

export default Image;