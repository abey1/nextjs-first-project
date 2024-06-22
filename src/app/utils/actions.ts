"use server";
import { revalidatePath } from "next/cache";
import db from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const createPostAction = async (prevState: any, formData: FormData) => {
  // auth check
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    redirect("/api/auth/login");
  }

  const data = Object.fromEntries(formData);
  const title = data.post as string;
  const body = data.body as string;

  const result = await db.post.create({
    data: {
      title,
      body,
    },
  });
  revalidatePath("/posts");
  return { message: data.post + "" };
};

export { createPostAction };
