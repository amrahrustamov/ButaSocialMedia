import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CiUser } from "react-icons/ci";
import { PiLockKeyFill } from "react-icons/pi";
import { FcMindMap } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="signIn">
        <div className="container">
            <div className="justify-content-center row">
                <div className="col-md-8 col-lg-6 col-xl-5 conBoxes">
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
                                    <div className="mb-3 username">
                                        <label className='form-label'>Email</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <CiUser className='userLogo'/>
                                            </div>
                                            <input type="text" name="email" id="email" placeholder='Enter email' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 password">
                                        <div className="float-end">
                                            <a href="/" className='font-size-13 text-muted forgetPassword'>Forget password?</a>
                                        </div>
                                        <label className='form-label'>Password</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <PiLockKeyFill className='passwordLogo'/>
                                            </div>
                                            <input type="password" name="password" id="password" placeholder='Enter password' className='input-with-margin-left'/>
                                        </div>

                                    </div>
                                    <div className="mb-4 float-start checkBox">
                                        <input type="checkbox" id="remember-check" className='form-check-input'/>
                                        <label for="remember-check" className='form-check-label'>Remember me</label>
                                    </div>
                                    <div className="buttonBox">
                                        <button type='submit' className='btn btn-primary d-block w-100'>Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bottomPart text-center">
                        <p>Don't have an account ? <a href="/" >Signup now</a></p>                       
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
