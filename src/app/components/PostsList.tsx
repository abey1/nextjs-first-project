import Link from "next/link";
import db from "../../lib/db";
const PostsList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const posts = await db.post.findMany();

  return (
    <ul>
      {posts.map((post: any, index: any) => {
        return (
          <li key={index}>
            <Link className="text-1xl " href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
