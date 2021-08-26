import Post from './post'
import usePhotos from '../hooks/use-photos'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
const Timeline = () =>{
    usePhotos();
    const user = useSelector(state => state.user);
    const posts = useSelector(state => state.posts);
    console.log(posts);
    return(
        <div className="container col-span-2">
        {
            !posts? (<Skeleton count={4} height={500} width={640} className="mb-5"/>)
            :posts?.length > 0?(
                posts.map((post)=><Post key={post.docId} post={post} user={user}/>)
            ):(<p>Follow people or upload photos</p>)

        }
        
        </div>
    )
}
export default Timeline