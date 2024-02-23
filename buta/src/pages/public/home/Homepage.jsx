import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'
import axios from 'axios'
import AddPost from '../../../components/addPost/AddPost'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  const getCurrenUserId = async () => {
    try {
   await axios.get('http://localhost:5065/home/user_id', {
        withCredentials: true, 
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      navigate("/sign_in")
    }
  };
  getCurrenUserId();
}, []);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.post('http://localhost:5065/home/all_blogs', {
          withCredentials: true,  
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate("/sign_in")
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
              <AddPost />
              {posts.map((item, id) => (
                <PostCard key={id} item={item} />
              ))}
            </div>
          </div>
        </main>
    </div>
  )
}
export default Homepage