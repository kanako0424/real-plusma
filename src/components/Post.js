import React from 'react'
import { Link } from "react-router-dom"
import '../App.css';

function Post({ postId, postName, nickname, price, imageUrl }) {

  return (
    // react-bootstrapでメディアクエリを実装する
    <figure className="post col-6 col-md-4 col-lg-3">
      <Link 
        target="_blank" 
        to={{
          pathname: `posts/${postId}`,
          state: {nickname: nickname}
        }}
        className=""
      >
        <div className="thumbnail">
          <img src={imageUrl} alt="アップロード写真"/>
          <span className="price-tag">¥{price}</span>
        </div>
        <figcaption>{postName}</figcaption>
      </Link>
    </figure>
  )
}

export default Post