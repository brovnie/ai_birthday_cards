import React, {useRef} from 'react'
import { Input } from '../../components'

const Search = (props) => {
    const searchInput = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput.current.value);
        props.isLoading(true);
        //TODO: fetch data
        searchInput.current.value = "";
    }

  return (
    <form onSubmit={handleSubmit}>   
        <div className="relative grid grid-cols-12 gap-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div className="col-span-10">
                <Input 
                    ref={searchInput}
                    label= {{
                        text: "Search...",
                        hidden: true
                    }}
                    input={{
                        id: 'search',
                        type: 'text',
                        pattern: "^[^ ].+[^ ]$",
                        placeholder: "Search",
                        className: "col-span-8"
                    }}
                />
            </div>
            <button type="submit" className="col-span-2 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>
  )
}

export default Search
