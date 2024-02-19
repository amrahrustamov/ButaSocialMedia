import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'
import axios from 'axios'

const Homepage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5065/home/all_blogs', {
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
    <div className='homepage'>
      <Header />
      <main>
        <div className="middlePartOfHomePage">
            <div className="postCards">
              {
                posts && posts.map((item, id)=> {
                  return (
                    <PostCard key={id} item={item}/>
                  )
                })
              }
              
            
            </div>
        </div>
      </main>
    </div>
  )
}
export default Homepage
