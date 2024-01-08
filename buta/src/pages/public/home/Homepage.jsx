import React from 'react'
import Header from '../../../components/header/Header'
import AddPost from '../../../components/addPost/AddPost'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Header />
      <main>
        <div className="leftPartOfHomePage">left part</div>
        <div className="middlePartOfHomePage">
          <AddPost />
            <div className="postCards">
              <PostCard />
            </div>
        </div>
        <div className="rightPartOfHomePage">right part</div>
      </main>
    </div>
  )
}
export default Homepage
