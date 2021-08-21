import Header from "./header";
import Image from "./image"
const Post = ({post}) =>{
    
    return(
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
            <Header username={post.username}/>
            <Image src={post.imageSrc} caption={post.caption}/>
        </div>
        
    )
}

export default Post;