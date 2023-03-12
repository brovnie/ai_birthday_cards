import React, { useState, useEffect } from 'react'
import { Loader } from "../../components";
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
        {
            !isLoading ? ( <Loader /> ) : ( <Grid isLoading={handleLoading}/> ) 
        }
    </div>
  )
}

export default Showcase
