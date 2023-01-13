import { useState } from 'react'
import notifications from './notifications'
import Notification from './Notification.jsx'
import './App.css'

function App() {
  const [readNotifications, setReadNotifications] =useState(notifications)
  function handleSetRead(){
    setReadNotifications(readNotifications.map(notificacion =>{
      return {
        ...notificacion,
        isReaded: true
      }
    }))
  }
  return (
    <div className="App">
      <header className='App__header'>
        <h2 className='App__header-noti'>Notifications <span className='number__noti'>{readNotifications.filter(not => not.isReaded == false ).length}</span></h2>
        <a onClick={handleSetRead} className='App__header-action'>Mark all as read</a>
      </header>
      <ul className='App__ul'>
        {readNotifications.map(noti => {
          const { id, userName, date, userImg, description, message, post, isReaded, action } = noti
          const className = isReaded ? 'App__ul-li-readed' : 'App__ul-li-unreaded'
          return (
            <li className={className} key={id}>
              <Notification
                userName={userName}
                date={date}
                userImg={userImg}
                description={description}
                message={message}
                post={post}
                action={action}
                isReaded={isReaded}
              />
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default App
