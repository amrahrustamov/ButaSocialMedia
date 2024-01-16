import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import AddPost from '../../../components/addPost/AddPost'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'
import axios from 'axios'

const Homepage = () => {
  const [posts, setPosts] = useState();

  useEffect(() =>{
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
    
  },[posts]);
  return (
    <div className='homepage'>
      <Header />
      <main>
        <div className="leftPartOfHomePage">left part</div>
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
