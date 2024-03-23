import React from 'react'

const ReviewItem = ({item}) => {
  const {review,user} = item
  const {text,createdAt,rating} = review
  const options = {year:"numeric",month:"long",day:"numeric"}
  const formatedDate = new Date(createdAt).toLocaleDateString("tr-TR",options)
  return (
    <li className="comment-item">
    <div className="comment-avatar">
      <img src={user.avatar} alt="" width={60}/>
    </div>
    <div className="comment-text">
      <ul className="comment-star">
        {Array.from({length:rating}, (_,index) => {
          return(
            <li key={index}>
            <i className="bi bi-star-fill"></i>
            </li>
          )
        })}
      
       
      </ul>
      <div className="comment-meta">
        <strong>{user.username}</strong>
        <span> - </span>
        <time>{formatedDate}</time>
      </div>
      <div className="comment-description">
        <p>{text}</p>

      </div>
    </div>
  </li>

  )
}

export default ReviewItem