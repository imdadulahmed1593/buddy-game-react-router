import React from "react";
import "./Post.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Post({ userId, id, body, title }) {
  return (
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <h4 className="post__body">{body}</h4>
      <Link to={`/posts/${id}`}>
        <Button variant="contained" color="primary" href="#contained-buttons">
          See Details
        </Button>
      </Link>
    </div>
  );
}

export default Post;
