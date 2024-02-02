import React from 'react'
import '../../../../src/App.css'
import { NavLink } from 'react-router-dom'

const HeaderOfProfile = () => {
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
                    <NavLink>Posts</NavLink>
                    <NavLink>Photos</NavLink>
                    <NavLink className="add">Add</NavLink>
                    <NavLink>Videos</NavLink>
                    <NavLink>Friends</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderOfProfile
