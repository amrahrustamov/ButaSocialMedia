import React from 'react'
import '../../App.css'
import HeaderOfProfile from './profile_sections/HeaderOfProfile'
import Header from '../header/Header'


const Profile = () => {
  return (
    <div className='profile'>
      <Header />
      <HeaderOfProfile />
    </div>
  )
}

export default Profile
