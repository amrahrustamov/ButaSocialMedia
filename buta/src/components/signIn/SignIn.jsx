import '../../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useContext, useState } from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import { FcMindMap } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

const SignIn = () => {
    const userData = useContext(UserContext);
    const navigate = useNavigate();
    const link = 'http://localhost:5247/api/Authentication/login';

    const [loginFailed, setLoginFailed] = useState(false)
    const [notification, setNotification] = useState()

    const [loginUser, setLoginUser] = useState({
        email:"",
        password: "",
    });
    const [modelLoginUser] = useState(loginUser)
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
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                setLoginFailed(true);
                setNotification("Login failed");
                throw new Error('Network response was not ok');
            }
            setLoginFailed(false);
            setLoginUser(modelLoginUser)
            console.log(response);

            return response.json();
        })
        .then(data => {
            console.log(data);
            userData.changeUser(loginUser.email);
            navigate(userData.user !== null ? '/home' : '/');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
        const handleOnChange = (event) => {
            setLoginFailed(false);
            setLoginUser({
                ...loginUser,
                [event.target.name]: event.target.value
            });
        };
        const handleButtonClick = (event) => {
            event.preventDefault();
            postUser();
        };
  return (
    userData.user !== null  ? (window.location.href='/home') : 
    <div className="signIn">
        <div className="container">
            <div className="box d-flex justify-content-center align-items-center row">
                <div className="col-md-8 col-lg-6 col-xl-5 conBoxes1">
                    <div className="topPartContainer text-center">
                        <div className="topPart text-center p-2">
                            <a href="/" className='emblemOfSite'><FcMindMap />Buta<FcMindMap /></a>
                            <h4>Sign in</h4>
                            <p>Sign in to continue to Buta</p>
                        </div>
                    </div>
                    <div className="signInSection">
                        <div className="px-3 card-body">
                            <div className="inCardBody">
                                <form action="" className='formBox'>
                                <div className="mb-1 mt-2 inputs email">
                                        <label className='form-label'>Email</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <MdOutlineMailLock className='userLogo'/>
                                            </div>
                                            <input type="text" onChange={handleOnChange} name="email" id="email" placeholder='Enter email' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-1 password inputs">
                                        <div className="float-end passwordBox">
                                            <Link to={'/reset_password'} className='text-muted forgetPassword'>Forget password?</Link>
                                        </div>
                                        <label className='form-label'>Password</label>
                                        <div className="mb-1 conInput">
                                            <div className="conLogo">
                                                <PiLockKeyFill />
                                            </div>
                                            <input type="password"  onChange={handleOnChange} name="password" id="password" placeholder='Enter password' className='input-with-margin-left' />
                                        </div>

                                    </div>
                                    <div className="mb-1 checkBox inputs">
                                        <input type="checkbox" id="remember-check" className='form-check-input' />
                                        <label htmlFor="remember-check" className='form-check-label'>Remember me</label>
                                    </div>
                                    <div className="buttonBox inputs">
                                        <button type='submit' className='btn btn-primary d-block w-100' onClick={handleButtonClick}>Sign in</button>
                                        {loginFailed && (
                                           
                                           <div className='mt-1 notification d-flex align-items-center justify-content-center w-100'>                
                                                <div className='alert alert-warning text-center'> 
                                                {notification}
                                              </div>
                                         </div>
                                       )}
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
    </div>
  )
}

export default SignIn
