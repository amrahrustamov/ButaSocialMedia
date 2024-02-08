import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import AddPost from '../../../components/addPost/AddPost'
import '../../../App.css'
import PostCard from '../../../components/postCard/friends/PostCard'
import LeftSideBar from '../../../components/leftSidebarHome/LeftSideBar'
import axios from 'axios'
import { UserContext } from '../../../context/UserProvider'

const Homepage = () => {
  const userData = useContext(UserContext);
  const userEmail = userData.user;
  const [posts, setPosts] = useState();
  console.log(userEmail);


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
      }
    }
      catch{
      }
    };
    getPosts();
    
  },[posts]);
  // useEffect(() =>{
  //   const getPosts = async () => {
  //     const getPosts = async () => {
  //       await axios.get('https://randomuser.me/api/?results=50')
  //       .then(response => setPosts(response.data.results))
  //       .catch(err => console.log(err))
  //   }
  //   try{
  //     if(!posts){
  //       getPosts();
  //       console.log('beli');
  //     }
  //   }
  //     catch{
  //     }
  //   };
  //   getPosts();
  //   console.log(posts);
    
  // },[posts]);
  
  return (
    localStorage.getItem('userEmail') === null  ? (window.location.href='/') : 
    <div className='homepage'>
      <Header/>
      <main>
        <div className="leftPartOfHomePage"></div>
        <div className="middlePartOfHomePage">
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
