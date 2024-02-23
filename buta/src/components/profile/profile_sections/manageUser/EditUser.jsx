import React, { useEffect, useState } from 'react'
import "../../../../App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState({
    firstName:"",
    lastName:"",
    country: "",
    city: "",
    activities:"",
    birthday: null,
    gender: null,
    about:"",
    education:"",
    work:"",
});

useEffect(() => {
  const getUserInfo = async () => {
    try {
      const response = await axios.get('http://localhost:5065/profile/user_info', {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  };
  
  getUserInfo();
}, []);
const setValue = () =>{
  user !== null ?? setInfo({
    firstName: user.FirstName,
    lastName: user.LastName,
    country: user.Country,
    city: user.City,
    activities: user.Activities,
    birthday: user.Birthday,
    gender: user.Male,
    about: user.About,
    education: user.Education,
    work: user.Work
  });
}
setValue();


const handleSubmit = async () => {
 
  try {
    await axios.post('http://localhost:5065/profile/edit_user_info', info, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    window.location.reload();
  } catch (error) {
    console.error(error);
    navigate("/sign_in")
  }
};

const handleOnChange = (event) => {
  setInfo({
      ...info,
      [event.target.name]: event.target.value
  });
};
const [visibility, setVisibility] = useState('public');

const handleVisibiltyChange = (event) => {
  setVisibility(event.target.value);
};
  return (
    <>
    {user === null ? <p>Loading...</p> : 
    <div className="editInfo">
        <div className="editInfoContainer">
          <div className='inputs'>
            <input value={user.FirstName} onChange={handleOnChange} type="text" id='firstName' name="firstName" placeholder="Enter your firstName"/>
            <input value={user.LastName} onChange={handleOnChange} type="text" id='lastName' name="lastName" placeholder="Enter your lastName"/>
            <input value={user.Country} onChange={handleOnChange} type="text" id='country' name="country" placeholder="Enter your country"/>
            <input value={user.City} onChange={handleOnChange} type="text" id='city' name="city" placeholder="Enter your city"/>
            <input value={user.Activities} onChange={handleOnChange} type="text" id='activities' name="activities" placeholder="Add activity"/>
            <input value={user.Birthday} onChange={handleOnChange} type="text" id='birthday' name="birthday" placeholder="Birthday"/>
            <input value={user.Gender} onChange={handleOnChange} type="text" id='gender' name="gender" placeholder="Gender"/>
            <input value={user.About} onChange={handleOnChange} type="text" id='about' name="about" placeholder="Write something about yourself"/>
            <input value={user.Education} onChange={handleOnChange} type="text" id='education' name="education" placeholder="Education"/>
            <input value={user.Work} onChange={handleOnChange} type="text" id='work' name="work" placeholder="Work"/>
          </div>
          <div className='other'>
            <div className='publicPrivate'>
              <p>Profile status</p>
              <select value={visibility} onChange={handleVisibiltyChange}>
                <option value={user.IsPublic !== true ? true : false}>{user.IsPublic === true ? "Friends" : "Public"}</option>
                <option value="friends">{user.IsPublic !== false ? "Friends" : "Public"}</option>
              </select>
            </div>
          </div>
          <div className='save'>
            <button onClick={handleSubmit} className='editProfile'>Save</button>
          </div>
        </div>
    </div>
    }
    </>
  )
}

export default EditUser