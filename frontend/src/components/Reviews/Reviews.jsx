import React, { useEffect, useState } from 'react'
import './reviews.css'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'
const Reviews = ({active,singleProduct,setSingleProduct}) => {
  const [users, setUsers] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const thisReview = []
  useEffect(() => {
    const fetchUser = async() => {
  
      try {
        const response = await fetch(`${apiUrl}/api/users`)
      
        if(response.ok){
          const data = await response.json()
          setUsers(data)
  
        }else{
          message.error("Server Hatası Kullanıcılar Getirilemedi")
        }
      } catch (error) {
       console.log(error);
      }
    }
    fetchUser()
  },[apiUrl])

  singleProduct.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user)

    matchingUsers.forEach((matchingUser) => {
      thisReview.push(({
        review:review,
        user:matchingUser
      }))
    })
  })
  return (
    <div className={`tab-panel-reviews ${active}`}>
    {singleProduct.reviews.length > 0 ? <div className="comments">
    <>
    <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <ol className="comment-list">
        {
          thisReview.map((item,index) => (
            <ReviewItem key={index} item={item}/>
          ))
        }


      </ol>
    </>
    </div>: <h3>Hiç yorum yok !</h3>}
    <div className="review-form-wrapper">
      <h2>Yorum ekle</h2>
      <ReviewForm setSingleProduct={setSingleProduct} singleProduct={singleProduct}/>
    </div>
    
  </div>
  )
}

export default Reviews