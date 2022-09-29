import React, { useState } from "react";
import Button from "../buttons/button";
import Comments from "../modals/comments";

const Post = ({ title, body }) => {
  const [showComments, setShowComments] = useState(false);

  const toggle = () => setShowComments(!showComments);
  return (
    <>
      <div className="rounded-lg border border-2 p-3 px-5">
        <h3 className="prose prose-2xl">{title}</h3>
        <p>
          Published by: <small className="text-sm">Leanne Graham</small>
        </p>
        <p className="my-5">{body}</p>
        <div>
          <Button onClick={toggle} grey>
            View all comments
          </Button>
        </div>
      </div>
      <Comments isOpen={showComments} toggle={toggle} />
    </>
  );
};

export default Post;
