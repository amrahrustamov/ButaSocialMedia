import React, { useState } from 'react'
import '../../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { PiLockKeyFill } from "react-icons/pi";
import { FcMindMap } from "react-icons/fc";
import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const SignUp = () => {

    
    const link = 'http://localhost:5247/api/Authentication/register';

    const [registrationSuccess, setRegistrationSuccess] = useState(false)
    const [registrationFailed, setRegistrationFailed] = useState(false)
    const [notification, setNotification] = useState()

    const [registerUser, setRegisterUser] = useState({
        surname: "",
        lastname: "",
        email:"",
        password: "",
        phonenumber: "",
    });
    const modelRegisterUser = registerUser;
    const postUser = async () => {
        console.log(registerUser);

        const data = {
            firstName: registerUser.surname,
            lastName: registerUser.lastname,
            email: registerUser.email,
            password: registerUser.password,
            phoneNumber: registerUser.phonenumber,
            createTime: new Date()
        };

        fetch(link, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                setRegistrationFailed(true);
                setRegistrationSuccess(false);
                setNotification("Register failed");
                throw new Error('Network response was not ok');
            }
            setRegisterUser(modelRegisterUser)
            setRegistrationSuccess(true);
            return response.json();
        })
        .then(data => {
            setRegistrationSuccess(true);
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
        const handleOnChange = (event) => {
            setRegistrationSuccess(false);
            setRegistrationFailed(false);
            setRegisterUser({
                ...registerUser,
                [event.target.name]: event.target.value
            });
        };
        const handleButtonClick = (event) => {
            event.preventDefault();
            postUser();
        };
        
        return (
            <div className="signUp">
        <div className="container">
            <div className=" d-flex justify-content-center align-items-center row box">
                <div className="col-md-8 col-lg-6 col-xl-5 conBoxes">
                    <div className="topPartContainer">
                        <div className="topPart text-center">
                            <a href="/" className='emblemOfSite'><FcMindMap />Buta<FcMindMap /></a>
                            <h4>Register</h4>
                            <p>Get your Buta account now</p>
                        </div>
                    </div>
                    <div className="signInSection">
                        <div className="px-3 card-body">
                            <div className="inCardBody">
                                <form action="" className='formBox'>
                                    <div className="mb-1 mt-2 inputs">
                                        <label className='form-label'>Email</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <MdOutlineMailLock className='userLogo'/>
                                            </div>
                                            <input type="text" name="email" id="email" value={registerUser.email} onChange={handleOnChange} placeholder='Enter email' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-1 inputs">
                                        <label className='form-label'>Phone Number</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <MdOutlinePhoneAndroid className='userLogo'/>
                                            </div>
                                            <input type="digit" name="phonenumber" id="phonenumber" value={registerUser.phonenumber} onChange={handleOnChange} placeholder='Enter phone number' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-1 inputs">
                                        <label className='form-label'>Name</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <CiUser className='userLogo'/>
                                            </div>
                                            <input type="text" name="surname" id="surname" value={registerUser.surname} onChange={handleOnChange} placeholder='Enter your name' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-1 inputs">
                                        <label className='form-label'>Lastname</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <CiUser className='userLogo'/>
                                            </div>
                                            <input type="text" name="lastname" id="lastname" value={registerUser.lastname} onChange={handleOnChange} placeholder='Enter your lastname' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    {/* <div className="mb-1 inputs">
                                        <label className='form-label'>Date of Birth</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <BsCalendar2Date className='userLogo'/>
                                            </div>
                                            <input type="date" name="birthdate" id="birthdate" value={registerUser.} placeholder='birthdate' className='input-with-margin-left birthday'/>
                                        </div>
                                    </div> */}
                                    <div className="mb-1 inputs">
                                        <label className='form-label'>Password</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <PiLockKeyFill className='passwordLogo'/>
                                            </div>
                                            <input type="text" name="password" id="password" value={registerUser.password} onChange={handleOnChange} placeholder='Enter password' className='input-with-margin-left'/>
                                        </div>

                                    </div>
                                    <div className="buttonBox inputs">
                                        <button type='submit' onClick={handleButtonClick} className='btn btn-primary d-block w-100 mt-1'>Register</button>
                                        {registrationSuccess && (
                                           
                                           <div className='mt-1 notification d-flex align-items-center justify-content-center w-100'>
                                                <div className='alert alert-success text-center'>
                                                    Registration completed successfully!
                                                </div>
                                           </div>
                                        )}
                                        {registrationFailed && (
                                           
                                           <div className='mt-1 notification d-flex align-items-center justify-content-center w-100'>                
                                                <div className='alert alert-warning text-center'> 
                                                {notification}
                                              </div>
                                         </div>
                                       )}
                                    </div>
                                    <div className="termsOfUse text-center">
                                        <p>By registering you agree to the Buta <a href="/404">Terms of Use</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bottomPart text-center">
                        <p>Already have an account ? <Link to={'/sign_in'}>Signin</Link></p>                       
                        <p>
                        © 2024 Buta. Created by Amrah Rustamov
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
