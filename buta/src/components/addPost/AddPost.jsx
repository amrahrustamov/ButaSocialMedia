import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const AddPost = () => {
  return (
    <div className='addPost'>
        <div className="containerAddPost">
                <div className="topPartOfAddPost">
                    <div className="profileImg">
                        <Link>
                            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="logo" />
                        </Link>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Add story'/>
                    </div>
                </div>
            <div className="bottomPartOfAddPost"></div>
        </div>
    </div>
  )
}

export default AddPost
