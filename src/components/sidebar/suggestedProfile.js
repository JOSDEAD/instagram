import { useState } from 'react'
import { Link } from 'react-router-dom'
import {DEFAULT_IMAGE_PATH} from '../../constants/paths'
const SuggestedProfile = ({profileId,profileUsername,userId}) =>{
    const [followed,setFollowed]=useState(false)
    const handleFollow=()=>{
        setFollowed(true)
        //TODO Actually follow the user in the DB

    }
    return !followed?(
        <div className="flex flex-row justify-between items-center align-items">
            <div className="flex justify-between items-center ">
                <img 
                src={`/images/avatars/${profileUsername}.jpg`} 
                className="rounded-full w-8 flex mr-3" 
                alt=""
                onError={error=>error.target.src = DEFAULT_IMAGE_PATH}/>
                <Link to={`p/${profileUsername}`}>
                    <p className="text-sm font-bold">{profileUsername}</p>
                </Link>
                
            </div>
            <button 
                className="text-xs font-bold text-blue-medium"
                type="button"
                onClick={handleFollow}
            >
                Follow
            </button>
        </div>
        )
        : null
            
}
export default SuggestedProfile