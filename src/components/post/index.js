import Header from "./header";
import Image from "./image"
import PropTypes from 'prop-types'
import Actions from "./actions";
const Post = ({post,user}) =>{
    const {following,userId}=user;
    return(
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
            <Header username={post.username}/>
            <Image src={post.imageSrc} caption={post.caption}/>
            <Actions likes={post.likes} userLikedPhoto={post.userLikedPhoto} docId={post.docId} following={following} userId={userId}/>
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

export default Post;
