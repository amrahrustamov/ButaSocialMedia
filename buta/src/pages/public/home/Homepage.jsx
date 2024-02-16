import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import AddPost from '../../../components/addPost/AddPost'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'

const Homepage = () => {

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);

  const [posts, setPosts] = useState([]);

useEffect(() => {
  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:5065/home/all_blogs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  getPosts();
}, []);

  return (
    user === null  ? (window.location.href='/') : 
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
