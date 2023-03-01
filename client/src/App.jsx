import React from 'react'
import { BrowserRouter } from "react-router-dom";
import {Router,Header} from "./components";
import Container from './layouts/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main >
      <Container>
        <Router/>
      </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
