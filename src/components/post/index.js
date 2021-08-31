import Header from "./header";
import Image from "./image"
import PropTypes from 'prop-types'
import Actions from "./actions";
import { useMemo, useRef } from "react";
import Comments from "./comments";
import Description from "./description";
import React from 'react'
const Post =({post,user}) =>{
    const {following,userId}=user;
    const memPost= useMemo(()=>post,[post]);
    const commentInput = useRef();
    return(
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
            <Header username={post.username}/>
            <Image src={post.imageSrc} caption={post.caption}/>
            <Actions likes={memPost.likes} userLikedPhoto={memPost.userLikedPhoto} docId={memPost.docId} following={following} userId={userId}/>
            <Description username={memPost.username} caption={memPost.caption}/>
            <Comments comments={memPost.comments} docId={memPost.docId} posted={memPost.dateCreated} commentInput={commentInput}/>
        </div>
        
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
}


export default  Post
