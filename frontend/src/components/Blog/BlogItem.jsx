import React from 'react'

const BlogItem = ({img}) => {
  return (
    <div>
        <img style={{width:"100%",aspectRatio:3/2}} src={img.img} alt="" />
      </div>
  )
}

export default BlogItem