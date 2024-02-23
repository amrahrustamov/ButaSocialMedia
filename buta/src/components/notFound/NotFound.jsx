import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='boxNotFound'>
      <div className='containerNotFound'>
        <Link to={"/"}>Go Home</Link>
        <p className='notFound'>Not Found</p>
      </div>
    </div>
  )
}

export default NotFound
