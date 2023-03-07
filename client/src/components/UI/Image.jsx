import React from 'react'

const Image = (props) => {
  return (
    <div className={`relative ${props.wrapperCss && props.wrapperCss}`} style={{width: `${props.image.width}`, height: `${props.image.height}` }}>
        {props.children}
      <img src={props.image.src} alt={props.image.alt} className={`absolute w-100 h-100 insert-0 object-cover ${props.image.css && props.image.css}`}/>
    </div>
  )
}

export default Image;
      
