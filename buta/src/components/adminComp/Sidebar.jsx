import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
   <div className="sidebar col-xl-3 col-lg-3 col-md-3 col-sm-3">
    <div className="boxInSidebar text-center">
        <Link to={'/admin'} className='logoAdminPanel'>Admin Panel</Link>
        <div className="adminOptions">
                <ul>
                    <li><NavLink>Messages</NavLink></li>
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

export default Sidebar
