import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import { IoEarthSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineClipboardList } from "react-icons/hi";

const PostCard = (props) => {
  const { name , picture} = props.item;
  useEffect(()=> {
    console.log(props.item);
  }, [])
  
  return (
    <div className='postCard'>
        <div className="topPostCard d-flex">
              <div className="leftOfTopPost d-flex">
                <div className="img">
                    <img src={picture.large} alt="profile" />
                </div>
                <div className="timeAndName">
                  <div className="name d-flex">
                    <p>{props.item.name.title} {name.first} {name.last}</p>
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
        <div className="about">
          <div className="containerAbout">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis delectus vero, inventore optio nam alias dicta repellendus, dolorem doloremque assumenda et non dignissimos nesciunt incidunt consequuntur similique, suscipit officia iste.</p>
          </div>
        </div>
        <div className="bottomPostCard">
          <div className="countOfActivites">
            <div className="leftPart"><AiOutlineLike /><span>15K</span></div>
            <div className="rightPart">
              <FaRegComment />
              <span>2K</span>
            </div>
          </div>
          <div className="buttons">
              <Link><AiOutlineLike /></Link>
              <Link><FaRegComment /></Link>
              <Link><PiShareFat /></Link>
              <Link><HiOutlineClipboardList /></Link>
          </div>

        </div>
    </div>
  )
}

export default PostCard
