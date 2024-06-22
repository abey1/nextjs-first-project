import Link from "next/link";
import React, { Suspense } from "react";
import PostsList from "../components/PostsList";
import SuspenseContainer from "../components/SuspenseContainer";
import FormContainer from "../components/FormContainer";
import { createPostAction } from "../utils/actions";
export default async function page() {
  return (
    <main className="text-center pt-32 px-5 leading-9">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <SuspenseContainer>
        <PostsList />
      </SuspenseContainer>
      <FormContainer action={createPostAction}>
        <div className="flex flex-col w-[400px] h-full gap-5 mx-auto   my-2">
          <input
            type="text"
            name="post"
            id="post"
            className="border border-zinc-500 rounded-md px-3"
          />
          <textarea
            name="body"
            id="body"
            placeholder="Body content for new post"
            className="border rounded px-3"
            rows={6}
            required
          ></textarea>
          <button className="uppercase bg-blue-500 rounded-lg text-white py-5">
            create post
          </button>
        </div>
      </FormContainer>
    </main>
  );
}
