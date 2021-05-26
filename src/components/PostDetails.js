import React, { useState, useEffect } from 'react'
import { db } from "../firebase"
import PostDetailsPost from './PostDetailsPost';
import Header from './Header';
import NavBar from './NavBar'

function PostDetails() {
  const [post, setPost] = useState([]);
  const postId = window.location.href.slice(-20);
  
  useEffect(() => {
    db.collection('posts').doc(postId).get().then((doc) => {
      if (doc.exists) {
        setPost(doc.data())
      } else {
        console.log('no such document!')
      }
    }).catch(err => {
      console.log("error: ", err);
    });
  }, []);

  console.log(post)

    return(
      <>
      <Header title={"商品詳細"}/>
      <PostDetailsPost 
        key={post.postId}
        postId={post.postId}
        authorId={post.authorId}
        postName={post.postName}
        imageUrl={post.imageUrl}
        publishedDate={post.publishedDate}
        price={post.price}
        memo={post.memo}
        answer={post.answer}
        category={post.category}
        link={post.link}
        rating={post.rating}
        scoreOfPracticeExam={post.scoreOfPracticeExam}
        universityName={post.universityName}
        description={post.description}
      />
      <NavBar />
      </>
    )

}

export default PostDetails
