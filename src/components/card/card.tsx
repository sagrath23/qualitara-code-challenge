import Link from "next/link";
import { use, Suspense } from "react";
import { getUserDetailsByUserId } from "@/api";
import { getOrSetCache } from "@/utils/cache";

interface CardProps {
  id: string;
  title: string;
  userId: string;
}

function CardContent({ id, title, userId }: CardProps) {
  // Use cache to get user details
  const user = use(getOrSetCache<{ name: string }>(userId, () => getUserDetailsByUserId(userId)));
  return (
    <li>
      <Link prefetch={false} href={`/posts/${id}`}>
        {title} - By {user.name}
      </Link>
    </li>
  );
}

export const Card = (props: CardProps) => (
  <Suspense fallback={<li>Loading...</li>}>
    <CardContent {...props} />
  </Suspense>
);