import React, { useEffect, useState } from 'react'
import '../../App.css'
import { SlOptions } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Comment = (props) => {
const blogData = props.data;
const [comments, setComments] = useState(null);
const [page, setPage] = useState(1);
const link = 'http://localhost:5065/home/add_comment';
const getLink = `http://localhost:5065/home/comments/blog/${blogData.Id}`;



useEffect(()=>{
const getData = async () => {
  try {
    const response = await axios.get(getLink, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    setComments(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
getData();
},[comments]);
const [comment, setComment] = useState("")
const AddComment = () =>{
  setPostData({
    BlogId: blogData.Id,
    Comment: comment
  });
  setComments(null);
}
const [postData, setPostData] = useState({
  BlogId: null,
  Comment: null
});
const fetchData = async () => {
  try {
    await axios.post(link, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
  } catch (error) {
    console.error('Error:', error);
  }
};
useEffect(() => {
  if (postData.BlogId !== null && postData.Comment !== null) {
    fetchData();
  }
}, [postData]);
const handleAddComment = (e) => {
  setComment(e.target.value)
 }
 function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}
  return (
    <div className="commentContainer d-felx row">
      {page > 1 && <Link onClick={setPage(page-1)}>Previous comments</Link>}
      {comments !== null && comments.map(comment => <><div className="comments">
          <div className="userImg">
            {
              comment.Owner.ProfileImage !== null && <img src={`http://localhost:5065/home/images/${comment.Owner.ProfileImage}`} alt=''/>
            }
          </div>
          <div className="userAndComment d-flex row">
            <div className="user">{comment.Owner.FirstName} {comment.Owner.LastName}</div>
            <div className="comment">{comment.Content}</div>
          </div>
            <Link className="settings"><SlOptions /></Link>
        </div>
        <div className='timeContainer'>
          <div className="time">{formatDate(comment.DateTime)}</div>
        </div></>)
      }
      <div className='pagesOfComments'>
        {comment.CountOfComment > 5 && (comment.CountOfComment * 6) > page && <Link onClick={setPage(page+1)}>Next comments</Link>}
      </div>
        <div className='addComment'>
          <input onChange={handleAddComment} type="text" placeholder="Add a comment..." />
          <button onClick={AddComment}>Add</button>
        </div>
    </div>
  )
}
export default Comment