import React from 'react';
import '../../App.css';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const Exit = (props) => {
  const navigate = useNavigate();
    const handleExit = async () => {
      try {
        await axios.post('http://localhost:5065/authentication/logout', null, {
          withCredentials: true,
        });
        console.log('Logged out successfully');
        navigate('/sign_in');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

  return (
    <div className='exitBox'style={{ display: props.exit !== true ? "none" : "flex" }}>
        <div className="exitContainer d-flex row align-items-center justify-content-center">
            <Link to={'/profile'} className='text-center'>Profile</Link>
            <Link className='text-center'>Settings</Link>
            <Link onClick={handleExit} className='text-center'>Exit</Link>
        </div>
        
    </div>
  )
}

export default Exit
