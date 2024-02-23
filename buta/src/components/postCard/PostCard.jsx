import React, { useContext, useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import { IoEarthSharp } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Comment from '../addComment/Comment';
import { UserContext } from '../../context/UserProvider';
import axios from 'axios';

const PostCard = (props,index) => {

  const {user} = useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [acceptButton, setAcceptButton] = useState(false);
  const [option, setOption] = useState(false);
  const [comment, setComment] = useState(false);

  const commentHandler = () => {
    setComment(!comment)
  }
  const AcceptRemoveHandler =  async (id) =>{
    const bId = id;
        try {
          await axios.delete(`http://localhost:5065/home/delete_blog/${bId}`,{
          withCredentials: true,       
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setAcceptButton(!acceptButton);
    };
    const OptionChoise = () =>{
      setAcceptButton(!acceptButton);
      setOption(false);
      console.log("daxil oldu");
  }

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + props.item.Image.length) % props.item.Image.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % props.item.Image.length;
    setCurrentIndex(index);
  };
  console.log(props.item);
  return (
    <div className='postCard' key={index}>
      {
        acceptButton === true && <div className='containerYesOrNo'>
        <div className='yesOrNo'>
        <p>Are you sure to delete?</p>
        <div className='buttons'>
          <Link onClick={()=>AcceptRemoveHandler(props.item.Id)} className='yes' type='button'><span className='yesText'>Yes</span></Link>
          <Link className='no' type='button'><span className='noText'>No</span></Link>
        </div>
      </div>
      </div>
      }
        <div className="topPostCard d-flex">
              <div className="leftOfTopPost d-flex">
                <div className="img">
                {props.item.Owner && (
                  <img className='userImage' src={`http://localhost:5065/home/images/${props.item.Owner.ProfileImage}`} alt="PostImage" />)
                }       
                </div>
                <div className="timeAndName">
                  <div className="name d-flex">
                    <p>{props.item.Owner.FirstName} {props.item.Owner.LastName}</p>
                    {
                      user !== props.item.OwnerId &&
                      <Link className='follow'>Follow</Link>
                    }
                  </div>
                  <div className="time">
                    <span>{props.item.DateTime} {props.item.IsPublic === true ? <IoEarthSharp /> : <BsFillPersonFill />}</span>
                  </div>
                </div> 
              </div>
              <div className="rightOfTopPost">
                <div className="icons">
                  <Link onClick={() => setOption(!option)}><SlOptions /></Link>
                </div>
                {
                option === true && 
                <div className='options'>
                  <Link className='hide' type='button'>Hide</Link>
                  <Link onClick={OptionChoise} className='delete' type='button'>Delete</Link>
                </div>
                }
              </div>
        </div>
        <div className="post">
        <div className="slideshow-container">
          <div className="slide">
            <img src={`http://localhost:5065/home/images/${props.item.Image[currentIndex]}`} alt={`Slide ${currentIndex}`} />
          </div>
          {
            props.item.Image.length > 1 && <> 
            <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
            <button className="next" onClick={goToNextSlide}>&#10095;</button></>
          }
         
        </div>
        </div>
        <div className="about">
          <div className="containerAbout">
            <div className="content"><p className='blogContent'>{props.item.Content}</p></div>
            <div className="tags">{props.item.Tags && props.item.Tags.map((tag, index) => <p key={index}>{tag}</p>)}</div>
            
            
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