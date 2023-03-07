import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (    
        <div className={`flex flex-col ${props.wrapperCss && props.wrapperCss} `}> 
            <label htmlFor={props.input.id} className={`f ${props.label.hidden && "hidden"}  font-bold`}>{props.label.text}</label>
            <input ref={ref} {...props.input} className={`block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${props.input.cssclass}`}/>
        </div>
  )
}
)

export default Input;