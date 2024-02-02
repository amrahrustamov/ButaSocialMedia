import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import AddPost from '../../../components/addPost/AddPost'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'
import LeftSideBar from '../../../components/leftSidebarHome/LeftSideBar'

const Homepage = () => {
  const [posts, setPosts] = useState();

  useEffect(() =>{
    const getPosts = async () => {
      // Make a simple GET request
        fetch('http://localhost:5260/api/User/GetUsers')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

  }
    console.log(posts);
    getPosts();
    console.log(posts);
    
  },[posts]);
  
  return (
    <div className='homepage'>
      <Header />
      <main>
        <div className="leftPartOfHomePage"><LeftSideBar /></div>
        <div className="middlePartOfHomePage">
          <AddPost />
            <div className="postCards">
              {
                posts && posts.map((item, index) => {
                  return (
                    <PostCard key={index} item={item}/>
                  )
                })
              }
              
            
            </div>
        </div>
        <div className="rightPartOfHomePage">right part</div>
      </main>
    </div>
  )
}
export default Homepage
