import React, { useState } from 'react'
import '../../App.css'
import HeaderOfProfile from './profile_sections/HeaderOfProfile'
import Header from '../header/Header'
import Post from './posts/Post'
import Photos from './images/Photos'
import Videos from './videos/Videos'
import Friends from './friends/Friends'


const Profile = () => {

  const [selectedLinkId, setSelectedLinkId] = useState(null);

  const handleLinkIdChange = (id) => {
    setSelectedLinkId(id);
    console.log(id);
  };
  return (
    <div className='profile d-flex row'>
      <Header />
      <HeaderOfProfile onLinkIdChange={handleLinkIdChange}/>
      {
        selectedLinkId === 1 && <Post />
      }
      {
        selectedLinkId === 2 && <Photos />
      }
      {
        selectedLinkId === 3 && <Videos />
      }
      {
        selectedLinkId === 4 && <Friends />
      }
    </div>
  )
}

export default Profile
