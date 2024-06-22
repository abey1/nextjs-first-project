import SuspenseContainer from "@/app/components/SuspenseContainer";
import React from "react";
import db from "../../../lib/db";
import { notFound } from "next/navigation";
import SinglePostContainer from "@/app/components/SinglePostContainer";
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id as string;

  return (
    <main className="text-center pt-32 px-5">
      <SuspenseContainer>
        <SinglePostContainer id={id} />
      </SuspenseContainer>
    </main>
  );
}
