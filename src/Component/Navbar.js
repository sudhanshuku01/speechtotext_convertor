import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div><Link to="/">SpToTx</Link></div>
      <div><Link to="/about">About</Link></div>
    </div>
  )
}
