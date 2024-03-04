import React, { useState } from 'react'
import '../../App.css'
import HeaderOfProfile from './profile_sections/HeaderOfProfile'
import Header from '../header/Header'
import Post from './posts/Post'


const Profile = () => {
  const [selectedLinkId, setSelectedLinkId] = useState(1);

  const handleLinkIdChange = (id) => {
    setSelectedLinkId(id);
  };
  return (

    <div className='profile d-flex row'>
      <Header />
      <HeaderOfProfile onLinkIdChange={handleLinkIdChange}/>
      {
        selectedLinkId === 1 && <Post />
      }
      {
        selectedLinkId === 2 && <Post />
      }

    </div>
  )
}

export default Profile
