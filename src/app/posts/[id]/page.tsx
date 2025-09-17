'use client';

import { getPostById, getPostCommentsByPostId } from "@/api";
import { useEffect, useState } from "react";

const PostDetailPage = ({
  params,
}: {
  params: { id: string }
}) => {
  const [postDetail, setPostDetail] = useState<{ post: unknown, comments: unknown[] }>({ post: undefined, comments: [] });

  useEffect(() => {
    const postDataPromise = Promise.all([getPostById(params.id), getPostCommentsByPostId(params.id)]);

    postDataPromise.then(([postData, commentsData]) => {
      setPostDetail({
        post: postData,
        comments: commentsData,
      });
    });
  }, []);

  if(!postDetail?.post) return (<p>Loading...</p>);

  return (
  <>
    <h1>{postDetail.post?.title}</h1>
    <p>{postDetail.post?.body}</p>
    <ul>
      {postDetail.comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.body}</p>
          <small>Comment by: {comment.email}</small>
        </li>
      ))}
    </ul>
  </>);
};

export default PostDetailPage;
