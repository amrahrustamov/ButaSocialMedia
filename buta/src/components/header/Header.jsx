import React, { useState } from 'react'
import '../../App.css'
import { FcMindMap } from 'react-icons/fc'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineHome } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { LiaUserFriendsSolid, LiaLayerGroupSolid } from "react-icons/lia";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import Exit from '../exit/Exit';

const Header = () => {

  const [exit, setExit] = useState(false);
  const  handleClick = () => {
    setExit(!exit)
  }
  return (
    <header>
      <div className="containerHeader">
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 leftPartOfHeader">
                <div className="logo"><a href="/" className='emblemOfSite'><FcMindMap /><h2>Buta</h2></a></div>
                <div className="searchInput"><label htmlFor="input"><CiSearch /></label><input type="text" placeholder='Search' className='search' id='input'/></div>
            </div>
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 middlePartOfHeader">
                <div className='containerOfMiddlePart'>
                    <div id='friendsStory'><NavLink to={'/friends_story'}><LiaUserFriendsSolid /></NavLink></div>
                    <div id='allStory'><NavLink to={'/home'}><AiOutlineHome /></NavLink></div>
                    <div id='pageStory'><NavLink to={'/group_story'}><LiaLayerGroupSolid /></NavLink></div>   
                </div>
                 
            </div>
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 rightPartOfHeader">
              <div className="containerOfRightPart">
                <div className='menu'><Link><CgMenuGridO /></Link></div>
                <div className='messages'><Link><BiSolidMessageDetail /></Link></div>
                <div className='notifications'><Link><IoMdNotifications /></Link></div>
                <div className='profilePhoto'><Link onClick={handleClick}><img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="logo" /></Link></div>
              </div>
              <Exit exit={exit}/>
            </div>
      </div>
    </header>
  )
}

export default Header
