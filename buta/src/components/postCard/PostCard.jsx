import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import { IoEarthSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const PostCard = () => {
  return (
    <div className='postCard'>
        <div className="topPostCard d-flex">
              <div className="leftOfTopPost d-flex">
                <div className="img">
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="profile" />
                </div>
                <div className="timeAndName">
                  <div className="name d-flex">
                    <p>Mr Jackhson Sanchez</p>
                    <Link className='follow'>Follow</Link>
                  </div>
                  <div className="time">
                    <span>January 9 at 5:34 PM  <IoEarthSharp /></span>
                  </div>

                </div>
                
              </div>
              <div className="rightOfTopPost">
                <div className="icons">
                  <Link><SlOptions /></Link>
                  <Link><IoMdClose /></Link>
                </div>
              </div>
        </div>
        <div className="post">
          <div className="imgContainer">
            <img src="https://img.freepik.com/free-photo/buta-shape-red-jewelry-pin_114579-12101.jpg" alt="postImg" />
          </div>
        </div>
        <div className="about"></div>
        <div className="bottomPostCard">
          <div className="countOfActivites">
            <div className="leftPart"><AiOutlineLike /><span>15K</span></div>
            <div className="rightPart">
              <FaRegComment />
              <span>2K</span>
            </div>
          </div>
          <div className="buttons">
              <Link><AiOutlineLike />Like</Link>
              <Link><FaRegComment />Comment</Link>
              <Link><PiShareFat />Share</Link>
          </div>

        </div>
    </div>
  )
}

export default PostCard
