"use client";
import React, { useState } from "react";

const Loading = () => {
  //   const dots = "";
  //   const [dots, setDots] = useState("");
  //   setInterval(() => {
  //     if (dots.length < 3) {
  //       setDots(dots + ".");
  //     } else {
  //       setDots("");
  //     }
  //   }, 1000);
  return (
    <div className="loading-dots w-full h-full flex items-center justify-center my-10 ">
      {/* <h1>Loading</h1> */}
      <h1 className="dot one">.</h1>
      <h1 className="dot two">.</h1>
      <h1 className="dot three">.</h1>
    </div>
  );
};

export default Loading;
