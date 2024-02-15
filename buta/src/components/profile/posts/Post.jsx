import axios from 'axios';
import '../../../App.css'
import React, { useEffect, useState } from 'react'
import UserPostCard from '../../postCard/user/UserPostCard';
import { NavLink } from 'react-router-dom';
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

const Post = () => {
  const [posts, setPosts] = useState();

  useEffect(() =>{
    const getPosts = async () => {
      await axios.get('https://randomuser.me/api/?results=50')
      .then(response => setPosts(response.data.results))
      .catch(err => console.log(err))
  }


  getPosts();
  
},[]);
  return (
    <div className="posts">

      <div className="postCards">
        <div className="listAndGridBox">
          <NavLink className="list" id='1' ><CiBoxList /></NavLink>
          <NavLink className="grid" id='2'><BsGrid3X3Gap /></NavLink>
        </div>
              {
                posts && posts.map((item, index) => {
                  return (
                    <UserPostCard key={index} item={item}/>
                  )
                })
              }
      </div>
    </div>
  )
}

export default Post
