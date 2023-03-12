import React, { useState } from 'react'
import { Loader } from "../../components";
import { Search } from "../index.js";
import Grid from './Grid';

const Showcase = () => {
    const [loading,setLoading] = useState(false);

    const handleLoading = (data) => {
      console.log("hello");
      setLoading(data);
    }

  return (
    <div>
    <Search isLoading={handleLoading}/>
        {
            loading ? ( <Loader /> ) : ( <Grid /> ) 
        }
    </div>
  )
}

export default Showcase
