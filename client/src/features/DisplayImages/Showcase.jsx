import React, { useState } from 'react'
import { Search } from "../index.js";
import Grid from './Grid';

const Showcase = () => {
    const [isLoading,setisLoading] = useState(false);

    const handleLoading = (data) => {
      setisLoading(data);
    }
    
  return (
    <div>
    <Search isLoading={handleLoading}/>
       <Grid isLoading={isLoading}/>  
    </div>
  )
}

export default Showcase
