import React from 'react'
import '../../../../App.css'

const EditUser = () => {
  return (
    <div className='editBox'>
      <div className="editContainer">
        <div className="formBox d-flex row gap-2">
                <label htmlFor="firstName">First Name</label>
                <input id='firstName' type="text" placeholder='First Name' />
                <label htmlFor="lastName">Last Name</label>
                <input id='lastName' type="text" placeholder='Last Name' />
                <label htmlFor="country">Country</label>
                <input id='country' type="text" placeholder='Country' />
                <label htmlFor="city">City</label>
                <input id='city' type="text" placeholder='City' />
                <label  htmlFor="region">Region</label>
                <input id='region' type="text" placeholder='Region' />
                <label htmlFor="street">Street</label>
                <input id='street' type="text" placeholder='Street' />
                <label htmlFor="house">House</label>
                <input id='house' type="text" placeholder='House' />
                <label htmlFor="postalCode">Postal code</label>
                <input id='postalCode' type="text" placeholder='Postal code' />
                <label htmlFor="email">Email</label>
                <input id='email' type="text" placeholder='Email' />
                <label htmlFor="password">Password</label>
                <input id='password' type="text" placeholder='Password' />
                <label htmlFor="birthday">Birthday</label>
                <input id='birthday' type="text" placeholder='Birthday' />

        </div>
                <button>Save</button>
      </div>
    </div>
  )
}

export default EditUser
