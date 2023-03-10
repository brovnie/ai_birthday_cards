import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={`px-7 py-2 text-center rounded text-white w-full md:w-auto min-h-[42px] vertical-center md:text-xl md:py-4 md:px-9 md:leading-none ${props.bgcolor} ${props.css}`}>
      { props.children }
    </button>
  )
}

export default Button
