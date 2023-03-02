import React from 'react'
import { BrowserRouter } from "react-router-dom";
import {Router,Header} from "./components";
import {Container} from './layouts';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-6">
        <Container>
          <Router/>
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
