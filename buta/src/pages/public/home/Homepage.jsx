import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import '../../../App.css'
import PostCard from '../../../components/postCard/PostCard'
import axios from 'axios'
import AddPost from '../../../components/addPost/AddPost'

const Homepage = () => {

  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.post('http://localhost:5065/home/all_blogs', {
          withCredentials: true,
          responseType: 'blob',
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // const getPostImage = async (id) => {
    //   try {
    //     const response = await axios.post('http://localhost:5065/home/blog_image', {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //       responseType: 'blob',
    //       withCredentials: true,
    //     });
    //     console.log(response.data);
    //     const reader = new FileReader();
    //     reader.readAsDataURL(response.data);
    //     reader.onloadend = () => {
    //         const base64data = reader.result;
    //         setImages(base64data);
    //     };
    //     setPosts(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };


    getPosts();
  }, []);
  return (
    <div className='homepage'>
      <Header />
      <main>
        <div className="middlePartOfHomePage">
            <div className="postCards">
            <AddPost />
            
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
