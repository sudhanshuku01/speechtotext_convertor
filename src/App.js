import "./App.css"
import Navbar from './Component/Navbar';
import About from './Component/About'
import React from 'react'
import Container from "./Component/Container";
 import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom"
export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Container/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  )
}
