import axios from 'axios';
import '../../../App.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import PostCard from '../../postCard/PostCard';

const Post = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.post('http://localhost:5065/profile/user_blogs', {
          withCredentials: true,
          responseType: 'blob',
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPosts();
  }, []);
  console.log("post");
  console.log(posts);
  console.log("post");
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
                    <PostCard key={index} item={item}/>
                  )
                })
              }
      </div>
    </div>
  )
}

export default Post
