import { use } from 'react';
import Link from 'next/link';

interface ListProps {
  listPromise: Promise<{ id: string, title: string}[]>
}

export const List = ({ listPromise }: ListProps) => {
  const postList = use(listPromise);
  
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
  )
};
