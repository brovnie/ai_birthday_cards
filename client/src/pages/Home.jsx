import React, {useState, useEffect , Fragment} from 'react'
import { Showcase } from '../features/DisplayImages';
import { Hero } from '../components'


const Home = () => {
  return (
      <Fragment>
        <Hero />
        <Showcase />
      </Fragment>
  )
}

export default Home
