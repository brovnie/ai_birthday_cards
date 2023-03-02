import React, { useState } from 'react'
import { Loader } from "../../components";
import { Card } from '../../layouts';

const Showcase = () => {
    const [loading,setLoading] = useState(false);

  return (
    <div>
        {loading ? (
            <Loader />
        ) : (
      <Card />
        ) 
    }
    </div>
  )
}

export default Showcase
