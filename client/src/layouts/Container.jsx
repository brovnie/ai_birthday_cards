import React from 'react'

const Container = (props) => {
  return (
    <div className={`container mx-auto ${props.className} px-3 md:px-0`}>
       {props.children}
    </div>
  )
}

export default Container
