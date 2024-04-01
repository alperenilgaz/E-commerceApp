import { message } from 'antd'
import React, { useState } from 'react'

const ReviewForm = ({singleProduct,setSingleProduct}) => {
  const [rating,setRating] = useState(0)
  const [review, setReview] = useState("")
  const user  = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null 
  const handleRating = (e,newRating) => {
    e.preventDefault()
    setRating(newRating)
  }
  
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(rating === 0){
      message.warning("Puan seçiniz ")
      return;
    }
    const formData = {
      reviews:[
         ...singleProduct.reviews,
        {
          text:review,
          rating:rating,
          user:user.id || user._id

        }
      ]
    }
    try {
      const res = await fetch(`${apiUrl}/api/product/${singleProduct._id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if(res.ok){
        const data = await res.json()
        setSingleProduct(data)
        setReview("")
        setRating(0)
        message.success("Yorum başarıyla eklendi")

      }
    } catch (error) {
      message.error("Bir şeyler yanlış gitti")
      console.log(error)
    }
   
  }
  return (
    <form onSubmit={handleSubmit} className="comment-form">
        <p className="comment-notes">
          Your email address will not be published. Required fields are marked
          <span className="required">*</span>
        </p>
        <div className="comment-form-rating">
          <label>
            Değerlendirme
            <span className="required">*</span>
          </label>
          <div className="stars">
            <a  onClick={(e) => handleRating(e,1)} className={`star ${rating === 1 ? 'active' : ''}`}>
              <i className="bi bi-star-fill"></i>
            </a>
            <a  onClick={(e) => handleRating(e,2)} className={`star ${rating === 2 ? 'active' : ''}`}>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
            <a onClick={(e) => handleRating(e,3)} className={`star ${rating === 3 ? 'active' : ''}`}>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
            <a onClick={(e) => handleRating(e,4)} className={`star ${rating === 4 ? 'active' : ''}`}>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
            <a onClick={(e) => handleRating(e,5)} className={`star ${rating === 5 ? 'active' : ''}`}>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
          </div>
        </div>
        <div className="comment-form-comment form-comment">
          <label htmlFor="comment">
            Yorumun
            <span className="required">*</span>
          </label>
          <textarea required value={review} onChange={(e) => setReview(e.target.value)} id="comment" cols="50" rows="10"></textarea>
        </div>
        <div className="comment-form-cookies">
          <input id="cookies" type="checkbox" />
          <label htmlFor="cookies">
            Save my name, email, and website in this browser for the next time I
            comment.
            <span className="required">*</span>
          </label>

        </div>
        <div className="form-submit">
          <input type="submit" className="btn submit" />
        </div>
      </form>
  )
}

export default ReviewForm