import React, { useState } from 'react'
import '../../App.css'
import { FcAddImage } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const AddPost = ({sendValueToParent}) => {

  const [response, setResponse] = useState(true);
  const addPost = () => {
    setResponse(response === true ? false : true);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };

  const  close = () => {
    const value = "none";
    sendValueToParent(value);
  }
  return (
    <div className='post'>
      <div className="addButton">
          <Link onClick={addPost} className="add">Add Blog</Link>
      </div>
      {
        response === true &&
      <div className="addPost">
            <div className="input d-flex row my-3">
              <input  type="file" id="fileInput" className='hiddenInput d-none' onChange={handleFileChange}/>
                <label htmlFor="fileInput" className="fileInputWrapper mb-2">
                  <FcAddImage className="uploadIcon" />
                  <span>Choose File</span>
                </label>
              <textarea className='text mb-2' type="text" placeholder='Add a text'/>
              <input placeholder='Add location' type='text' id="locationInput" className='locationInput' onChange={handleFileChange}/>
              <input placeholder='Add tags : #Blog' type='text' id="tagsInput" className='tagsInput' onChange={handleFileChange}/>
              <button>Share</button>
            </div>
      </div>
      }
    </div>
  )
}

export default AddPost