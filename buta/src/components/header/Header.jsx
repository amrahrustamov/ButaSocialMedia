import React from 'react'
import '../../App.css'
import { FcMindMap } from 'react-icons/fc'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineHome } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { LiaUserFriendsSolid, LiaLayerGroupSolid } from "react-icons/lia";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";

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
                    <div id='friendsStory'><NavLink to={'/friends_story'}><LiaUserFriendsSolid /></NavLink></div>
                    <div id='allStory'><NavLink to={'/all_story'}><AiOutlineHome /></NavLink></div>
                    <div id='pageStory'><NavLink to={'/group_story'}><LiaLayerGroupSolid /></NavLink></div>   
                </div>
                 
            </div>
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 rightPartOfHeader">
              <div className="containerOfRightPart">
                <div className='menu'><Link><CgMenuGridO /></Link></div>
                <div className='messages'><Link><BiSolidMessageDetail /></Link></div>
                <div className='notifications'><Link><IoMdNotifications /></Link></div>
                <div className='profile'><Link><img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=sph" alt="logo" /></Link></div>
              </div>
            </div>
      </div>
    </header>
  )
}

export default Header
