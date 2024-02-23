import React, { useContext, useState } from 'react'
import '../../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineMailLock } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import { FcMindMap } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { UserContext } from '../../context/UserProvider';

const SignIn = () => {
    const navigate = useNavigate();
    const link = 'http://localhost:5065/Authentication/auth/login';
    const [buttonClick, setButtonClick] = useState(false);
    const [notification, setNotification] = useState(null);
    const [loginUser, setLoginUser] = useState({
        email:"",
        password: "",
    });
    const postUser = async () => {
        const data = {
            email: loginUser.email,
            password: loginUser.password,
        };
        fetch(link, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                setButtonClick(false);
                throw new Error('Network response was not ok');
            }
            navigate('/');
        })
        .catch((error) => {
            console.error('Error:', error);
            setNotification("Login failed");
            console.log(notification);
        });
    };
        const handleOnChange = (event) => {
            setLoginUser({
                ...loginUser,
                [event.target.name]: event.target.value
            });
        };
        const handleButtonClick = (event) => {
            event.preventDefault();
            setButtonClick(true);
            postUser();

        };
  return (
    <div className="signIn">
        {buttonClick === true ? <div className='spinner'>
        <ClipLoader color="#0764D1" cssOverride={{}} loading size={200} speedMultiplier={0.8} />
        </div> : 
        <div className="container">
            <div className="bcb justify-content-center row">
                <div className="col-md-8 col-lg-6 col-xl-5 conBoxes1">
                    <div className="topPartContainer text-center">
                        <div className="topPart text-center p-2">
                            <a href="/" className='emblemOfSite'><FcMindMap />Buta<FcMindMap /></a>
                            <h4>Sign in</h4>
                            <p>Sign in to continue to Buta</p>
                        </div>
                    </div>
                    <div className="signInSection">
                        <div className="p-4 card-body">
                            <div className="inCardBody">
                                <form action="" className='formBox'>
                                    <div className="mb-3 username inputs">
                                        <label className='form-label'>Email</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <MdOutlineMailLock className='userLogo'/>
                                            </div>
                                            <input onChange={handleOnChange} type="text" name="email" id="email" placeholder='Enter email' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 password inputs">
                                        <div className="float-end passwordBox">
                                            <Link to={'/reset_password'} className='text-muted forgetPassword'>Forget password?</Link>
                                        </div>
                                        <label className='form-label'>Password</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <PiLockKeyFill />
                                            </div>
                                            <input onChange={handleOnChange} type="password" name="password" id="password" placeholder='Enter password' className='input-with-margin-left'/>
                                        </div>

                                    </div>
                                    <div className="mb-4 checkBox inputs">
                                        <input type="checkbox" id="remember-check" className='form-check-input'/>
                                        <label htmlFor="remember-check" className='form-check-label'>Remember me</label>
                                    </div>
                                    <div className="buttonBox inputs">
                                        <button onClick={handleButtonClick} type='submit' className='btn btn-primary d-block w-100'>Sign in</button>
                                        {notification !== null &&
                                           
                                           <div className='mt-1 notification d-flex align-items-center justify-content-center w-100'>                
                                                <div className='alert alert-warning text-center'> 
                                                <p>{notification}</p>
                                              </div>
                                         </div> 
                                       }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bottomPart text-center">
                        <p>Don't have an account ? <Link to={'/sign_up'}>Signup now</Link></p>                       
                        <p>
                        © 2024 Buta. Created by Amrah Rustamov
                        </p>
                    </div>
                </div>
            </div>
        </div>    
        }    
    </div>
  )
}

export default SignIn