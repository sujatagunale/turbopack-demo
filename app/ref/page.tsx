"use client";

import React, { useRef } from "react";

import ChildComponent from "./ChildComponent";

const Page = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex max-w-7xl mx-auto">
      <ChildComponent ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default Page;
