import React from "react";
import db from "../../lib/db";
import { notFound } from "next/navigation";

const SinglePostContainer = async ({ id }: { id: String }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const singlePost = await db.post.findUnique({
    where: {
      id: id.toString(),
    },
  });
  if (!singlePost) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        {singlePost.title}
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">{singlePost.body}</p>
    </div>
  );
};

export default SinglePostContainer;
