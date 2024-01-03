import React from 'react'
import '../../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineMailLock } from "react-icons/md";
import { FcMindMap } from "react-icons/fc";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="resetPassword">
        <div className="container">
            <div className="justify-content-center row bcb">
                <div className="col-md-8 col-lg-6 col-xl-5 conBoxes2">
                    <div className="topPartContainer text-center">
                        <div className="topPart text-center p-2">
                            <a href="/" className='emblemOfSite'><FcMindMap />Buta<FcMindMap /></a>
                            <h4>Reset Password</h4>
                            <p>Reset Password With Buta</p>
                        </div>
                    </div>
                    <div className="signInSection">
                        <div className="p-4 card-body">
                            <div className="inCardBody">
                                <form action="" className='formBox'>
                                    <div className="text-center mb-3 alert alert-success show">Enter your Email and instructions will be sent to you!</div>
                                    <div className="mb-3 inputs">
                                        <label className='form-label'>Email</label>
                                        <div className="mb-3 conInput">
                                            <div className="conLogo">
                                                <MdOutlineMailLock className='userLogo'/>
                                            </div>
                                            <input type="text" name="email" id="email" placeholder='Enter email' className='input-with-margin-left'/>
                                        </div>
                                    </div>
                                    <div className="buttonBox inputs">
                                        <button type='submit' className='btn btn-primary d-block w-100'>Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bottomPart text-center">
                        <p>Remember It ? <Link to={'/sign_in'}>Signin</Link></p>                       
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

export default ResetPassword
