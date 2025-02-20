import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full relative'>
            {label && <label 
            className='absolute left-4 top-2 text-gray-400 text-sm transition-all transform scale-100 origin-left
          peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:scale-90 peer-focus:text-blue-500' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white
          outline-none border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200
          peer placeholder-transparent ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input