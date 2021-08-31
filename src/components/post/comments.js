import { formatDistance } from "date-fns";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import AddComment from "./add-comment";

const Comments = ({ docId, comments, posted, commentInput }) => {
  return (
    <>
      <div className="px-4 pt-1 pb-4">
        {comments.length > 2 && (
          <button className="text-sm text-gray-base mb-1 cursor-pointer">
            View all {comments.length} comments.
          </button>
        )}
        {comments.slice(-2).map((item) => (
          <p key={`${item.comment}-${item.displayName}`}>
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold">{item.displayName}</span>
            </Link>
            <span>{item.comment}</span>
          </p>
        ))}

        <span className="text-gray-base uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} AGO
        </span>
      </div>
      <AddComment docId={docId} commentInput={commentInput} />
    </>
  );
};

Comments.prototypes = {
  docId: Proptypes.string.isRequired,
  comments: Proptypes.array,
  posted: Proptypes.number.isRequired,
  commentInput: Proptypes.object.isRequired,
};

export default Comments;
