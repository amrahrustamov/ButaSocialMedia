import React, { useEffect, useState } from 'react'
import '../../App.css'
import axios from 'axios';

const Notification = () => {
    const [notifications,setNotifications] = useState(null);

    useEffect(() => {
        const getNotifications = async () => {
          try {
            const response = await axios.get('http://localhost:5065/home/notifications', {
              withCredentials: true,  
            });
            setNotifications(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        getNotifications();
      }, []);
    
      function formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
      
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
      
        if (days > 0) {
          return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
          return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
          return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
          return 'Just now';
        }
      }
  return (
    <div className='listOfNotifications'>
        <div className='notificationContainer'>
            <div className='sectionName'>
                <div className='textConatiner'>
                    <p>Notifications</p>
                </div>
            </div>
            {notifications !== null && notifications.map((item, id) => (

                <div key={id} className="notifList">
                    <div className='img'>
                        {item.Sender.ProfileImage !== null && <img src={`http://localhost:5065/home/images/${item.Sender.ProfileImage}`} alt="" />}
                    </div>
                    <div className='info'>
                        <div className='textInfo'><p>{item.Content}</p></div>
                        <div className='timeInfo'><p>{formatDate(item.DateTime)}</p></div>
                    </div>
                </div>
              ))}
        </div>
    </div>
  )
}

export default Notification