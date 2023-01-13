export default function Notification ({ userName, description, userImg, date, post, message, isReaded, action }) {
  const havePost = !post ? false : true
  const haveMessage = !message ? false : true
  const haveAction = !action ? false : true
  return (
    <>
      <div className="notification__info">
        <div className="notification__info-div">
          <img className="notification__info-div-img" src={userImg} />
        </div>
        <div className="notification__info-desc">
          <p className="notification__info-desc-p"><strong className="notification__username">{userName}</strong> {description} {haveAction && <strong className="action">{action}</strong>} {!isReaded &&<span className="badge">•</span>}</p>
          <span className="notification__info-desc-date">{date}</span>
        </div>
        {havePost && <div className="notification__info-post"><img className="notification__info-post-img" src={post} /></div>}
      </div>
      {haveMessage && <div className="notification__content"><p className="notification__message">{message}</p></div>}
    </>
  )
}