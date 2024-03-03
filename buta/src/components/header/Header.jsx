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
import Notification from '../notification/Notification';

const Header = () => {
  const [notification, setNotification] = useState(false);
  const [notificationsValue,setNotificationsValue] = useState(null);
  const [notifyStatus, setNotifyStatus] = useState(false);
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
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5065/home/notifications', {
          withCredentials: true,  
        });
        setNotificationsValue(response.data);
        response.data !== null && response.data.forEach(element => {
          element.Read === false && setNotifyStatus(true)
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getNotifications();
  },[]);

console.log(notificationsValue);
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
                <div className='menu box'><Link><CgMenuGridO /></Link></div>
                <div className='messages box'><Link><BiSolidMessageDetail /></Link></div>
                <div className='notifications box'><Link onClick={()=>setNotification(!notification)}><IoMdNotifications style={{ color: notifyStatus === true && 'rgba(235, 19, 19, 0.568)'}}/></Link>{notification && <Notification notificationsValue={notificationsValue} />}</div>
                <div className='profilePhoto box'><Link onClick={handleClick}><img src={user} alt="logo" /></Link></div>
              </div>
              <Exit exit={exit}/>
            </div>
      </div>
    </header>
  )
}

export default Header
