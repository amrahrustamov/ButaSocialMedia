import '../../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Notification = (props) => {
const notifyValues = props.notificationsValue;
    
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
      const SeeNotification = (props) => {
        try {
          axios.post(`http://localhost:5065/home/see-notification/${props}`, {
            withCredentials: true,  
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  return (
    <div className='listOfNotifications'>
        <div className='notificationContainer'>
            {notifyValues !== null && notifyValues.map((item, id) => (
              <Link onClick={()=>SeeNotification(item.Id)} to={"/card"}>
              
              <div key={id} className='notifList' style={item.Read === false ? { backgroundColor: '#0765d148' } : {}}>
                    <div className='img'>
                        {item.Sender.ProfileImage !== null && <img src={`http://localhost:5065/home/images/${item.Sender.ProfileImage}`} alt="" />}
                    </div>
                    <div className='info'>
                        <div className='textInfo'><p>{item.Content}</p></div>
                        <div className='timeInfo'><p>{formatDate(item.DateTime)}</p></div>
                    </div>
                </div>
                </Link>
              ))}
        </div>
    </div>
  )
}

export default Notification