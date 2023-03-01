import React from 'react'
import {Home, CreateBirthdayCard } from "../../pages";
import {Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-card" element={<CreateBirthdayCard />} />
    </Routes>
  )
}

export default Router