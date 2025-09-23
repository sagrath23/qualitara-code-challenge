'use client';

import { getPosts } from "@/api";
import { List } from "@/components/list";
import { Loader } from "@/components/loader";
import { Suspense } from "react";

const PostListPage = () => {
  const listPromise = getPosts();

  return (
    <Suspense fallback={<Loader />}>
      <List listPromise={listPromise}/>
    </Suspense>
  );
};

export default PostListPage;
