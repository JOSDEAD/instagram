import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost } from "../../state/actions/postActions";
import { commentToPost } from "../../services/firebase";
const AddComment = ({ docId, commentInput }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user);
  const handleAddComment = (event) => {
    event.preventDefault();
    dispatch(addCommentToPost(docId, username, comment));
    setComment("");
    return commentToPost(docId, username, comment);
  };

  return (
    <div className="border-t border-gray-primary">
      <form
        className="flex justify-between pl-0 pr-5"
        onSubmit={(event) =>
          comment.length >= 1 ? handleAddComment(event) : event.preventDefault()
        }
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="Add a comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && "opacity-25"
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleAddComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

AddComment.prototypes = {
  docId: PropTypes.string.isRequired,
  commentInput: PropTypes.object.isRequired,
};

export default AddComment;
