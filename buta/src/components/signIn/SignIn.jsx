import React from 'react'
import '../../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineMailLock } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import { FcMindMap } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
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
                                            <input type="text" name="email" id="email" placeholder='Enter email' className='input-with-margin-left'/>
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
                                            <input type="password" name="password" id="password" placeholder='Enter password' className='input-with-margin-left'/>
                                        </div>

                                    </div>
                                    <div className="mb-1 checkBox inputs">
                                        <input type="checkbox" id="remember-check" className='form-check-input'/>
                                        <label for="remember-check" className='form-check-label'>Remember me</label>
                                    </div>
                                    <div className="buttonBox inputs">
                                        <button type='submit' className='btn btn-primary d-block w-100'>Sign in</button>
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
