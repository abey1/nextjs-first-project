"use client";
import React from "react";
import FormContainer from "../components/FormContainer";
import { createPostAction } from "../utils/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
export default function page() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 border-red-500">
      <h1 className="text-3xl mb-5 uppercase">create post</h1>
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
      <LogoutLink className="py-2 px-3 border bg-zinc-800 text-white rounded-md hover:bg-zinc-700">
        Logout
      </LogoutLink>
    </div>
  );
}
