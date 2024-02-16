
import { createContext, useState } from 'react';
import '../../../App.css'
import { NavLink } from 'react-router-dom'

const HeaderOfProfile = ({onLinkIdChange}) => {

    const [user, setuser] = useState();

    const UserContext = createContext();
    setuser(UserContext);

 fetch('http://localhost:5065/home/all_blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: user })
  });
  

  const getIdHandle = (id) => {
    onLinkIdChange(id);
  }

  return (
    <div className='w-100 d-flex  justify-content-center headerOfProfile'>
        <div className="mainBox">
            <div className='first d-flex column'>
                <div className="userPhotoAndName">
                    <div className="imageBox d-flex justify-content-center align-items-center py-3">
                        <img src="" alt="" />
                    </div>
                    <div className='name py-3 d-flex justify-content-center align-items-center'>
                        Amrah Rustamov
                    </div>
                </div>
                <div className="userInfo">
                    <div className="shortInfo">
                        <p>Country <span>Azerbaijan</span></p>
                        <p>City <span>Baku</span></p>
                        <p>Friends  <span>250</span></p>
                        <p>Activite <span>Travel , Sport,  Movie</span></p>
                        <button className='editProfile'>Edit profile</button>
                    </div>
                </div>
            </div>

            <div className='second'>
                <div className="secondContainer">
                    <NavLink onClick={() => getIdHandle(1)} id='1'>Posts</NavLink>
                    <NavLink onClick={() => getIdHandle(2)}  id='2'>Friends</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderOfProfile
