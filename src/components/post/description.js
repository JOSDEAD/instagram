import Proptypes from 'prop-types'
const Description = ({caption,username}) => {
    return(
        <div className="px-4 pt-1 pb-0">
            <a href={`/p/${username}`} className="font-bold mr-1">{username}</a>
            <span>{caption}</span>
        </div>
    )
}

Description.prototypes = {
    caption: Proptypes.string,
    username: Proptypes.string
}

export default Description
