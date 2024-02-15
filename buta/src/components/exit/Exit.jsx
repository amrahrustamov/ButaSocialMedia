import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';

const Exit = (props) => {
    const handleExit = () => {
        localStorage.removeItem('userEmail');
    }

  return (
    <div className='exitBox'style={{ display: props.exit !== true ? "none" : "flex" }}>
        <div className="exitContainer d-flex row align-items-center justify-content-center">
            <Link to={'/profile'} className='text-center'>Profile</Link>
            <Link className='text-center'>Settings</Link>
            <Link onClick={handleExit} to={'/'} className='text-center'>Exit</Link>
        </div>
        
    </div>
  )
}

export default Exit
