import React from 'react'
import '../../App.css'
import { SlOptions } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Comment = () => {
  return (
    <div className="commentContainer d-felx row">
            <div className="comments">
              <div className="userImg"></div>
              <div className="userAndComment d-flex row">
                <div className="user">Amrah Rustamov</div>
                <div className="comment">cox gozel paylasim oldu</div>
              </div>
              <Link className="settings"><SlOptions /></Link>
            </div>
              <div className="time">5 days ago</div>
        </div>
  )
}

export default Comment
