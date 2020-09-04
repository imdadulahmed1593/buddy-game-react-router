import React, { useEffect, useState } from "react";
import "./PostDetail.css";
import { useParams } from "react-router-dom";
import { Card, CardContent, Avatar } from "@material-ui/core";
import fakeData from "../fakeData/fakeData";

function PostDetail() {
  const first15 = fakeData.slice(0, 15);
  const [images, setImages] = useState(first15);

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => alert(err.message));
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div className="postDetail">
      <Card>
        <CardContent>
          <div className="postDetail__info">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <div className="postDetail__comments">
            {comments.map((comment) => {
              const user = {
                ...comment,
                img: images[Math.floor(Math.random() * 15)].img,
              };

              return (
                <div className="postDetail__comment">
                  <div className="postDetail__commentPerson">
                    <Avatar src={user.img} className="postDetail__commentImg" />
                    <div className="postDetail__commentInfo">
                      <h4>{user.name}</h4>
                      <small>{user.email}</small>
                    </div>
                  </div>

                  <p className="postDetail__commentBody">{user.body}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostDetail;
