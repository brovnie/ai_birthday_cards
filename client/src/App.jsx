import React from 'react'
import { BrowserRouter } from "react-router-dom";
import {Router,Header} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="p-8 md:px-4 py-8 w-full">
      <Router/>
      </main>

    </BrowserRouter>
  )
}

export default App
