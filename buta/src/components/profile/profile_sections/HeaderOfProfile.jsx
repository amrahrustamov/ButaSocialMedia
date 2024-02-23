import { useEffect, useState } from 'react';
import '../../../App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { TbUpload } from "react-icons/tb";
import { ClipLoader } from 'react-spinners';
import EditUser from './manageUser/EditUser';
import { CiEdit } from "react-icons/ci";

const HeaderOfProfile = ({onLinkIdChange}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [exit, setExit] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [formData] = useState(new FormData());
  
  const getIdHandle = (id) => {
    onLinkIdChange(id);
  }
  const  handleClick = () => {
    setExit(!exit)
  }

  const handleImageChange = (e) => {

    formData.append('images', e.target.files[0]);
    updateProfileImg();
  };
  
  const updateProfileImg = async () => {
    try {
      await axios.post('http://localhost:5065/profile/add_profile_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5065/profile/user_info', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate("/sign_in")
        
      }
    };
    
    getUserInfo();
  }, []);


  const handleEditInfo = () =>{
    setEditButton(true)
  }

  return (
    <div className='w-100 d-flex  justify-content-center headerOfProfile'>
      {user === null ? <ClipLoader color="#0764D1" cssOverride={{}} loading size={200} speedMultiplier={0.8} /> : 
        <div className="mainBox">
            <div className='first d-flex column'>
                <div className="userPhotoAndName">
                <input onChange={handleImageChange} type="file" name="fileInput" id="fileInput" className='hiddenInput d-none' />
          <label htmlFor="fileInput" className="fileInputWrapper mb-2">
            <TbUpload className="uploadProfileImg" />
            <span>Change photo</span>
          </label>
                    <div className="imageBox d-flex justify-content-center align-items-center py-3">
                        { user.ProfileImage !== null ? <img src={`http://localhost:5065/home/images/${user.ProfileImage}`} alt="" /> : ""}
                    </div>
                    <div className='name py-3 d-flex justify-content-center align-items-center'>
                    {user.FirstName + " " + user.LastName}           
                    </div>
                </div>
                {
                  editButton ? <EditUser /> : <div className="userInfo">
                  <div className="shortInfo">
                      <p>Country <span>Azerbaijan</span></p>
                      <p>City <span>Baku</span></p>
                      <p>Friends  <span>250</span></p>
                      <p>Activite <span>Travel , Sport,  Movie</span></p>
                      <p>Birthday <span>28.02.1994</span></p>
                      <p>Gender <span>Male</span></p>
                      <p>About  <span>......</span></p>
                      <p>Education  <span>......</span></p>
                      <button onClick={handleEditInfo} className='editProfile'><CiEdit /></button>
                  </div>
              </div>
                }
                
            </div>

            <div className='second'>
                <div className="secondContainer">
                    <NavLink onClick={() => getIdHandle(1)} id='1'>Posts</NavLink>
                    <NavLink onClick={() => getIdHandle(2)}  id='2'>Friends</NavLink>
                </div>
            </div>
        </div>
      }
    </div>
  )
}

export default HeaderOfProfile
