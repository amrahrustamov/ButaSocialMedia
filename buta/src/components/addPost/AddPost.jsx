import React, { useState } from 'react'
import '../../App.css'
import { FcAddImage } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const AddPost = () => {

  const [blog, setBlog] = useState({
    file: null,
    text: "",
    location:"",
    tags: null,
});

  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [buttonClick, setButtonClick] = useState(false);
  const [visibility, setVisibility] = useState('public');
  const [formData] = useState(new FormData());

  const handleVisibiltyChange = (event) => {
    setVisibility(event.target.value);
  };

  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);
    files.forEach((file) => {
      setImages((prevImages) => [...prevImages, URL.createObjectURL(file)]);
      formData.append('images', file);
    });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    formData.delete('images', images[index]);
  };
  
  const handleSubmit = async (e) => {
    setButtonClick(true);
    e.preventDefault();
    formData.append('text', blog.text);
    formData.append('location', blog.location);
    formData.append('tags', tags);
    formData.append('isPublic', visibility);

    try {
      await axios.post('http://localhost:5065/home/add_blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

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
 

  const [response, setResponse] = useState(false);
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
    <form onSubmit={handleSubmit } className='post' onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}> 
      <div className="addButton">
          <Link onClick={addPost} className="add">Add Blog</Link>
      </div>
      {
        response === true &&
      <div className="addPost">
        {buttonClick === true ? <div className='spinner'>
        <ClipLoader color="#0764D1" cssOverride={{}} loading size={200} speedMultiplier={0.8} />
        </div> :
        <div className="input d-flex row my-3">
          <div className='securityOfPost'>
          <select value={visibility} onChange={handleVisibiltyChange}>
            <option value="public">Public</option>
            <option value="friends">Friends</option>
          </select>
          </div>
          <input onChange={handleImageChange} type="file" name="fileInput" id="fileInput" className='hiddenInput d-none' multiple />
          <label htmlFor="fileInput" className="fileInputWrapper mb-2">
            <FcAddImage className="uploadIcon" />
            <span>Choose File</span>
            <span className='countFiles'>{images.length > 0 &&` Selected ${images.length} files`}</span>
          </label>
          <div className='imageContainer'>
            {images.map((image, index) => (
                <div key={index} className='images'>
                  <img src={image} alt="" />
                  <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <MdCancel />
            </button>
                </div>
            ))}
          </div>
          <textarea value={blog.text} onChange={handleOnChange} placeholder='Add content' name='text' type="text" id='text' className='text mb-2'/>
          <input value={blog.location} onChange={handleOnChange} placeholder='Add location (examples: Country,City)' name='location' type='text' id="location" className='locationInput'/>

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
              <button type='submit' className='shareButton'>Share</button>
        </div>
        }
      </div>
      }
    </form>
  )
}

export default AddPost