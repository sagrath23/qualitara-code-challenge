'use client';

import { getPosts } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostListPage = () => {
  const [postList, setPostList] = useState<{ id: string, title: string}[]>([]);

  useEffect(() => {
    const postListPromise = getPosts();

    postListPromise.then((data) => {
      setPostList(data);
    });
  }, []);

  if(postList.length === 0) return <p>Loading...</p>

  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>
          <Link prefetch={false} href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostListPage;
