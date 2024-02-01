import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LeftSideBar = () => {
  return (
    <div className="sidebar col-xl-3 col-lg-3 col-md-3 col-sm-3">
    <div className="boxInSidebar text-center">
        <div className="adminOptions">
                <ul>
                    <li><NavLink to={'/admin'} className='logoAdminPanel'>Amrah Rustamov</NavLink></li>
                    <li><NavLink>Bugs</NavLink></li>
                    <li><NavLink>Settings</NavLink></li>
                    <li><NavLink>Admins</NavLink></li>
                    <li><NavLink>Users</NavLink></li>
                </ul>
        </div>
    </div>     
   </div>
  )
}

export default LeftSideBar
