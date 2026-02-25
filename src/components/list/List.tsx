import { use } from 'react';
import Link from 'next/link';
import { Card } from '../card';

interface ListProps {
  listPromise: Promise<{ id: string, title: string, userId: string }[]>
}

export const List = ({ listPromise }: ListProps) => {
  const postList = use(listPromise);
  
  return (
    <ul>
      {postList.map(({ id, title, userId }) => (
        <Card key={id} id={id} title={title} userId={userId}/>
      ))}
    </ul>
  )
};
