import React from 'react'

const FormField = React.forwardRef((props, ref) => {
  return (    
        <div className="flex"> 
            <label htmlFor={props.input.id} className={props.label.hidden ? "hidden" : ""}>{props.label.text}</label>
            <input ref={ref} {...props.input} className={`${props.input.class} block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
        </div>
  )
}
)

export default FormField;