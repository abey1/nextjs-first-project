import React, { Suspense } from "react";
import Loading from "../Loading";

const SuspenseContainer = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspenseContainer;
