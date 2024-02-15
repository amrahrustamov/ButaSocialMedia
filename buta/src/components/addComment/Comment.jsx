import React from 'react'
import '../../App.css'
import { SlOptions } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Comment = (props) => {
 console.log(props.data.Image);
  return (
    <div className="commentContainer d-felx row">
            <div className="comments">
              <div className="userImg"><img src={props.data.Image} alt=''/></div>
              <div className="userAndComment d-flex row">
                <div className="user">Amrah Rustamov</div>
                <div className="comment">cox gozel paylasim oldu</div>
              </div>
              <Link className="settings"><SlOptions /></Link>
            </div>
              <div className="time">5 days ago</div>
              <div className='addComment'>
                <div className="conImg"><div className="image"><img src={props.data.Image} alt=''/></div></div>
                <input type="text" placeholder="Add a comment..." />
                <button>Add</button></div>
        </div>
  )
}

export default Comment
