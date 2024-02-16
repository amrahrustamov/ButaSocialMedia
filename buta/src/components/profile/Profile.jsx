import React, { useState } from 'react'
import '../../App.css'
import HeaderOfProfile from './profile_sections/HeaderOfProfile'
import Header from '../header/Header'
import Post from './posts/Post'
import Friends from './friends/Friends'
import AddPost from '../addPost/AddPost'


const Profile = () => {


  const [selectedLinkId, setSelectedLinkId] = useState(null);

  const handleLinkIdChange = (id) => {
    setSelectedLinkId(id);
  };
  return (
    localStorage.getItem('user') === null  ? (window.location.href='/') : 
    <div className='profile d-flex row'>
      <Header />
      <HeaderOfProfile onLinkIdChange={handleLinkIdChange}/>
      {
        selectedLinkId === 1 && <Post />
      }
      {
        selectedLinkId === 2 && <Friends />
      }
      <AddPost />
    </div>
  )
}

export default Profile
