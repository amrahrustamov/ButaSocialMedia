import React from 'react'
import '../../App.css'
import { FcAddImage } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const AddPost = ({sendValueToParent}) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };

  const  close = () => {
    const value = "none";
    sendValueToParent(value);
  }
  return (
    <div className='addPost'>
        <div className="containerAddPost">
          <div className="topPartOfAddPost d-flex row">
            <div className="imgAndName d-flex column">
              <div className="profileImg">
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="profile" />
              </div>
              <div className="userName d-flex align-items-center">
                <h3>Amrah Rustamov</h3>
              </div>
              <button className='buttonClose' onClick={close}><IoMdClose /></button>
            </div>
            <div className="input d-flex row my-3">
              <input  type="file" id="fileInput" className='hiddenInput' onChange={handleFileChange}/>
                <label htmlFor="fileInput" className="fileInputWrapper mb-2">
                  <FcAddImage className="uploadIcon" />
                  <span>Choose File</span>
                </label>
              <textarea className='text mb-2' type="text" placeholder='Add a text'/>
              <button>Share</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddPost
