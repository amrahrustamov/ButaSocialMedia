import React, { useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import { IoEarthSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineClipboardList } from "react-icons/hi";
import Comment from '../addComment/Comment';

const PostCard = (props) => {

  const targetDate = new Date(props.item.DateTime);
  const differenceInDays = Math.abs(Math.ceil((targetDate - Date.now()) / (1000 * 3600 * 24)));

  const [comment, setComment] = useState(false);
  const commentHandler = () => {
    setComment(!comment)
  }


  return (
    <div className='postCard'>
        <div className="topPostCard d-flex">
              <div className="leftOfTopPost d-flex">
                <div className="img">
                {props.item && props.item.Image && <img src={props.item.Image} alt="Post Image" />}
                </div>
                <div className="timeAndName">
                  <div className="name d-flex">
                    <p>Amrah Rustamov {props.item.Location}</p>
                    <Link className='follow'>Follow</Link>
                  </div>
                  <div className="time">
                    <span>{differenceInDays} days ago <IoEarthSharp /></span>
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
          {props.item && props.item.Image && <img src={props.item.Image} alt="Post Image" />}
          </div>
        </div>
        <div className="about">
          <div className="containerAbout">
            <div className="content"><p>{props.item.Content}</p></div>
            <div className="tags">{props.item.Tags && props.item.Tags.map(tag => <p>{tag}</p>)}</div>
            
            
          </div>
        </div>
        <div className="bottomPostCard">
          <div className="countOfActivites">
            <div className="leftPart">{props.item.Likes && <span><AiOutlineLike /> {props.item.Likes.length}</span>}</div>
            <div className="rightPart">
              {props.item.Commets && <span> <FaRegComment /> {props.item.Commets.length}</span>}
            </div>
          </div>
          <div className="buttons">
              <Link><AiOutlineLike /></Link>
              <Link onClick={commentHandler}><FaRegComment /></Link>
              <Link><PiShareFat /></Link>
              <Link><HiOutlineClipboardList /></Link>
          </div>

        </div>
        {
          comment && <Comment data = {props.item}/>
        }
    </div>
  )
}

export default PostCard
