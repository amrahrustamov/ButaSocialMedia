import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

const Header = () => {

  const [exit, setExit] = useState(false);
  const  handleClick = () => {
    setExit(!exit)
  }

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5065/profile/get_profile_image', {
          withCredentials: true,
          responseType: 'blob'
        });

        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
            const base64data = reader.result;
            setUser(base64data);
        };
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    getPosts();
  }, []);
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
                    <div id='allStory'><NavLink to={'/'}><AiOutlineHome /></NavLink></div>
                    <div id='pageStory'><NavLink to={'/group_story'}><LiaLayerGroupSolid /></NavLink></div>   
                </div>
                 
            </div>
            <div className="col-lx-3 col-lg-3 col-md-4 col-sm-4 rightPartOfHeader">
              <div className="containerOfRightPart">
                <div className='menu'><Link><CgMenuGridO /></Link></div>
                <div className='messages'><Link><BiSolidMessageDetail /></Link></div>
                <div className='notifications'><Link><IoMdNotifications /></Link></div>
                <div className='profilePhoto'><Link onClick={handleClick}><img src={user} alt="logo" /></Link></div>
              </div>
              <Exit exit={exit}/>
            </div>
      </div>
    </header>
  )
}

export default Header
