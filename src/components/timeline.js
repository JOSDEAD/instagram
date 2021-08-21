import Post from './post'
import usePhotos from '../hooks/use-photos'
import Skeleton from 'react-loading-skeleton';

const Timeline = () =>{
    const {photos} = usePhotos();
    return(
        <div className="container col-span-2">
        {
            !photos?(<Skeleton count={4} height={500} width={640} className="mb-5"/>)
            :photos?.length > 0?(
                photos.map((post)=><Post key={post.docId} post={post}/>)
            ):(<p>Follow people or upload photos</p>)

        }
        
        </div>
    )
}
export default Timeline