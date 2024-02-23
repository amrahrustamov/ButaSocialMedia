import axios from 'axios';
import '../../../App.css';
import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../../postCard/PostCard';
import AddPost from '../../addPost/AddPost';
import { UserContext } from '../../../context/UserProvider';

const Post = () => {
  const data = useContext(UserContext);
  console.log(data);
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.post('http://localhost:5065/profile/user_blogs', {
          withCredentials: true,
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPosts();
  }, []);
  return (
    <div className="posts">
      <div className="postCards">
        <div  className="cards">
        <AddPost />
        {
          posts && posts.map((item, index) => {
            return (
              <PostCard key={index} item={item}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Post