import React from 'react'
import '../../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { PiLockKeyFill } from "react-icons/pi";
import { FcMindMap } from "react-icons/fc";
import { MdOutlineMailLock } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const SignUp = () => {

  return (
    <div className="signUp">
        <div className="container">
            <div className=" d-flex justify-content-center row box">
                <div className="col-md-8 col-lg-6 col-xl-5 conBoxes">
                    <div className="topPartContainer">
                        <div className="topPart text-center p-2">
                            <a href="/" className='emblemOfSite'><FcMindMap />Buta<FcMindMap /></a>
                            <h4>Register</h4>
                            <p>Get your Buta account now</p>
                        </div>
                    </div>
                    <div className="signInSection">
                        <div className="p-4 card-body">
                            <div className="inCardBody">
                                <form action="" className='formBox'>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Email</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <MdOutlineMailLock className='userLogo'/>
                                            </div>
                                            <input type="text" name="email" id="email" placeholder='Enter email' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Phone Number</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <MdOutlinePhoneAndroid className='userLogo'/>
                                            </div>
                                            <input type="digit" name="mobile" id="mobile" placeholder='Enter phone number' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Name</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <CiUser className='userLogo'/>
                                            </div>
                                            <input type="tel" name="name" id="name" placeholder='Enter your name' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Surname</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <CiUser className='userLogo'/>
                                            </div>
                                            <input type="text" name="surname" id="surname" placeholder='Enter your surname' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Date of Birth</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <BsCalendar2Date className='userLogo'/>
                                            </div>
                                            <input type="date" name="middlename" id="middlename" placeholder='Enter your middle name' className='input-with-margin-left birthday'/>
                                        </div>
                                    </div>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Password</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <PiLockKeyFill className='passwordLogo'/>
                                            </div>
                                            <input type="password" name="password" id="password" placeholder='Enter password' className='input-with-margin-left'/>
                                        </div>

                                    </div>
                                    <div className="buttonBox inputs">
                                        <button type='submit' className='btn btn-primary d-block w-100'>Register</button>
                                    </div>
                                    <div className="TermsOfUse text-center">
                                        <p>By registering you agree to the Chatvia <a href="/404">Terms of Use</a></p>
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
