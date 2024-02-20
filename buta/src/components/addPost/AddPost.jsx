import React, { useState } from 'react'
import '../../App.css'
import { FcAddImage } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const AddPost = ({sendValueToParent}) => {
  const [blog, setBlog] = useState({
    file: null,
    text: "",
    location:"",
    tags: "",
});

  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newTag = tagInput.trim();
      if (newTag !== '' && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput('');
      }
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  const handleImageRemove = (data) => {

    setImages(images.filter(img => img !== data));

  };

  const [response, setResponse] = useState(true);
  const addPost = () => {
    setResponse(response === true ? false : true);
  }
  const handleOnChange = (event) => {
    setBlog({
        ...blog,
        [event.target.name]: event.target.value
    });
};
  return (
    <div className='post'>
      <div className="addButton">
          <Link onClick={addPost} className="add">Add Blog</Link>
      </div>
      {
        response === true &&
      <div className="addPost">
        <div className="input d-flex row my-3">
          <input onChange={(e) => setImages(e.target.files)} type="file" name="fileInput" id="fileInput" className='hiddenInput d-none' multiple />
          <label htmlFor="fileInput" className="fileInputWrapper mb-2">
            <FcAddImage className="uploadIcon" />
            <span>Choose File</span>
            <span className='countFiles'>{images.length > 0 &&` Selected ${images.length} files`}</span>
          </label>
          <div className='imageContainer'>
            {Array.from(images).map((image, index) => (
              <div key={index} className="img">
                <div className='images'>
                  <img src={URL.createObjectURL(image)} alt="" />
                  <Link className='imgButton' onClick={() => handleImageRemove(image)}><MdCancel /></Link>
                </div>
              </div>
            ))}
          </div>
          <textarea value={blog.text} onChange={handleOnChange} placeholder='Add content' name='text' type="text" id='text' className='text mb-2'/>
          <input value={blog.location} onChange={handleOnChange} placeholder='Add location (examples: Country,City)' name='locationInput' type='text' id="locationInput" className='locationInput'/>

        <div className='tags'>
          <input className='tagInput' type="text" value={tagInput} onChange={handleTagChange} onKeyDown={handleInputKeyDown} placeholder="Add tag..."/>
          <div className='tagsBox'>
            {tags.map(tag => (
              <div key={tag} className="tag">
                {tag}
                <Link className='tagButton' onClick={() => handleTagRemove(tag)}><MdOutlineCancel /></Link>
              </div>
            ))}
          </div>
        </div>
              <button type='button' className='shareButton'>Share</button>
        </div>
      </div>
      }
    </div>
  )
}

export default AddPost