import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CiUser } from "react-icons/ci";

const SignIn = () => {
  return (
    <div className="signIn">
        <div className="container">
            <div className="justify-content-center row max-height">
                <div className="col-md-8 col-lg-6 col-xl-5 max-height d-flex row">
                    <div className="topPartContainer mt-4 d-flex align-items-center justify-content-center">
                        <div className="topPart text-center">
                            <a href="/" className='text-muted'>Buta</a>
                            <h4>Sign in</h4>
                            <p>Sign in to continue to Buta</p>
                        </div>
                    </div>
                    <div className="signInSection">
                        <div className="p-4 card-body">
                            <div className="p-3">
                                <form action="" className='d-flex row'>
                                    <div className="mb-3">
                                        <label className='form-label'>Username</label>
                                        <div className="mb-3">
                                            <CiUser className='m-3'/>
                                            <input type="text" name="email" id="email" placeholder='Enter email'/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="float-end">
                                            <a href="/" className='font-size-13 text-muted'>Forget password?</a>
                                        </div>
                                        <label className='form-label'>Password</label>
                                        <div className="mb-3">
                                            <CiUser className='m-3'/>
                                            <input type="password" name="password" id="password" placeholder='Enter password'/>
                                        </div>

                                    </div>
                                    <div className="mb-4 float-start">
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
                    <div className="bottomPart mt-1 text-center">
                        <p>Don't have an account ? <a href="/" className='font-weight-medium text-primary'>Signup now</a></p>                       
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
