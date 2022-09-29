import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getComments, deletePost } from "../../redux/actions";
import Button from "../buttons/button";
import Comments from "../modals/comments";

const Post = ({ title, body, user, id }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();

  const open = () => {
    dispatch(getComments(id)).then(() => {
      setShowComments(true);
    });
  };
  const close = () => setShowComments(false);
  const onDelete = () => {
    dispatch(deletePost(id));
  };
  return (
    <>
      <div className="rounded-lg border border-2 p-3 px-5">
        <h3 className="prose prose-2xl">{title}</h3>
        <p>
          Published by: <small className="text-sm">{user?.name}</small>
        </p>
        <p className="my-5">{body}</p>
        <div className="flex gap-2">
          <Button onClick={onDelete} grey>
            Delete Post
          </Button>
          <Button onClick={open}>View all comments</Button>
        </div>
      </div>
      <Comments isOpen={showComments} toggle={close} />
    </>
  );
};

export default Post;
