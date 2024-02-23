import axios from 'axios';
import '../../../App.css';
import React, { useEffect, useState } from 'react'
import PostCard from '../../postCard/PostCard';
import AddPost from '../../addPost/AddPost';


const Post = () => {
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