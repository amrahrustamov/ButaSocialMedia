import React, { useEffect, useState } from 'react'
import PostCard from '../../postCard/friends/PostCard'
import axios from 'axios';

const Photos = () => {
  const [posts, setPosts] = useState();

  useEffect(() =>{
    const getPosts = async () => {
      const getPosts = async () => {
        await axios.get('https://randomuser.me/api/?results=50')
        .then(response => setPosts(response.data.results))
        .catch(err => console.log(err))
    }
    try{
      if(!posts){
        getPosts();
        console.log('beli');
      }
    }
      catch{
      }
    };
    getPosts();
    console.log(posts);
    
  },[posts]);
  return (
    <div className="postCards">
              {
                posts && posts.map((item, index) => {
                  return (
                    <PostCard key={index} item={item}/>
                  )
                })
              }
            </div>
  )
}

export default Photos
