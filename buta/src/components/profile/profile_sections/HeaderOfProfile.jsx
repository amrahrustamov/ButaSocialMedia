
import '../../../App.css'
import { Link, NavLink } from 'react-router-dom'
import AddPost from '../../addPost/AddPost';
import { useState } from 'react';

const HeaderOfProfile = ({onLinkIdChange}) => {

const [response, setResponse] = useState("none");

  const getIdHandle = (id) => {
    onLinkIdChange(id);
  }
  const childValue = (value) => {
    setResponse(value);
  }
  const addPost = () => {
    setResponse(response === "none" ? "block" : "none");
  }

  return (
    <div className='w-100 d-flex  justify-content-center headerOfProfile'>
        <div className="mainBox">
            <div className='first d-flex column'>
                <div className="userPhotoAndName">
                    <div className="imageBox d-flex justify-content-center align-items-center py-3">
                        <img src="" alt="" />
                    </div>
                    <div className='name py-3 d-flex justify-content-center align-items-center'>
                        Amrah Rustamov
                    </div>
                </div>
                <div className="userInfo">
                    <div className="shortInfo">
                        <p>Country <span>Azerbaijan</span></p>
                        <p>City <span>Baku</span></p>
                        <p>Friends  <span>250</span></p>
                        <p>Activite <span>Travel , Sport,  Movie</span></p>
                        <button className='editProfile'>Edit profile</button>
                    </div>
                </div>
            </div>

            <div className='second'>
                <div className="secondContainer">
                    <NavLink onClick={() => getIdHandle(1)} id='1'>Posts</NavLink>
                    <Link onClick={addPost} id='3' className="add">Add</Link>
                    <NavLink onClick={() => getIdHandle(2)}  id='2'>Friends</NavLink>
                </div>
            </div>
            <AddPost sendValueToParent={childValue} style={{ display: response}}/>
        </div>
    </div>
  )
}

export default HeaderOfProfile
