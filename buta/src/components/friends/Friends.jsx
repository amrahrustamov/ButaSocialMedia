import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

const Friends = () => {
  const count = 15;
  return (
    <div className='friends'>
      <div className="friendsContainer">
        <div className="friendCard">
          <p className='title'>Friends</p>
        </div>
      {[...Array(count)].map((_, index) => (
      <div key={index} className="friendCard">
        <div className="imageBox">
          <Link>
          <img src="https://www.parentmap.com/images/article/7877/BOY_feature_credit_will_austin_848x1200.jpg" alt="" />
        </Link>
        </div>
        <div className="textBox">
          <div className="top">
            <div className="userName"><Link>John Doe</Link></div>
            <div className="followButton"><Link>Unfollow</Link></div>
          </div>
          <div className="middle">
            <p>Azerbaijan, Baku</p>
          </div>
          <div className="bottom"><p>Ortak dostlar</p></div>
        </div>
      </div>
    ))}
      </div>
    </div>
  )
}

export default Friends
