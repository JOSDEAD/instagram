import PropTypes from "prop-types";
const Likes = ({
  numberOfLikes,
  likes,
  toggleLike,
  followingsOfCurrentUser,
}) => {
  // TODO If someone that the user is following like the post
  const commonLiked = likes.filter((user) =>
    followingsOfCurrentUser.includes(user)
  );
  return (
    <>
      {
        numberOfLikes === 0 ? (
          <div>
            Be the first to{" "}
            <button type="button" className="font-bold" onClick={toggleLike}>
              like this.
            </button>
          </div>
        ) : commonLiked.length > 0 ? (
          <button type="button">
            {numberOfLikes} {numberOfLikes === 1 ? " like" : " likes"}
          </button> //TODO, Modal for likes
        ) : (
          <button className="font-bold" type="button">
            {numberOfLikes} {numberOfLikes === 1 ? " like" : " likes"}
          </button>
        ) //TODO, Modal for likes
      }
    </>
  );
};

Likes.propTypes = {
  numberOfLikes: PropTypes.number.isRequired,
  likes: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
  followingsOfCurrentUser: PropTypes.array.isRequired,
};
export default Likes;
