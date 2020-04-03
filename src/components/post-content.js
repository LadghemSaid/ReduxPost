import React from 'react'

const PostContent = (post) => {
    post = post.post;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Auteur : {post.author}</strong></p>
        </div>
    )
}


export default PostContent
