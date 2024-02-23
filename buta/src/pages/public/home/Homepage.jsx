import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'
import axios from 'axios'
import AddPost from '../../../components/addPost/AddPost'
import { UserContext } from '../../../context/UserProvider'

const Homepage = () => {
  const {updateUser} = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  const getCurrenUserId = async () => {
    try {
        const response = await axios.get('http://localhost:5065/home/user_id', {
        withCredentials: true, 
      });
      updateUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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