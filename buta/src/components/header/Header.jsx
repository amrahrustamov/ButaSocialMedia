import React from 'react'
import '../../App.css'
import { FcMindMap } from 'react-icons/fc'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";

const Header = () => {
  return (
    <header>
      <div className="containerHeader">
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 leftPartOfHeader">
                <div className="logo"><a href="/" className='emblemOfSite'><FcMindMap /><h2>Buta</h2></a></div>
                <div className="searchInput"><label htmlFor="input"><CiSearch /></label><input type="text" placeholder='Search' className='search' id='input'/></div>
            </div>
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 middlePartOfHeader">
                <div className='containerOfMiddlePart'>
                    <div><NavLink><LiaUserFriendsSolid /></NavLink></div>
                    <div><NavLink><AiOutlineHome /></NavLink></div>
                    <div><NavLink><TfiLayoutMediaOverlay /></NavLink></div>   
                </div>
                 
            </div>
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 rightPartOfHeader"></div>
      </div>
    </header>
  )
}

export default Header
