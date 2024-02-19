import React, { useState } from 'react'
import '../../App.css'
import { FcAddImage } from "react-icons/fc";
import { Link } from 'react-router-dom';

const AddPost = ({sendValueToParent}) => {
  const [blog, setBlog] = useState({
    file: "",
    text: "",
    location:"",
    tags: "",
});

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e) => {
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
          <input value={blog.file} onChange={handleOnChange} type="file" name="fileInput" id="fileInput" className='hiddenInput d-none'/>
          <label htmlFor="fileInput" className="fileInputWrapper mb-2">
            <FcAddImage className="uploadIcon" />
            <span>Choose File</span>
          </label>
          <input value={blog.text} onChange={handleOnChange} placeholder='Add a text' name='text' type="text" id='text' className='text mb-2'/>
          <input value={blog.location} onChange={handleOnChange} placeholder='Add location' name='locationInput' type='text' id="locationInput" className='locationInput'/>

        <div className='tags'>
          <input type="text" value={tagInput} onChange={handleInputChange} onKeyDown={handleInputKeyDown} placeholder="Add tag..."/>
          <div className='tagsBox'>
            {tags.map(tag => (
              <div key={tag} className="tag">
                {tag}
                <button className='tagButton' type="button" onClick={() => handleTagRemove(tag)}>x</button>
              </div>
            ))}
          </div>
        </div>
              <button className='shareButton'>Share</button>
        </div>
      </div>
      }
    </div>
  )
}

export default AddPost