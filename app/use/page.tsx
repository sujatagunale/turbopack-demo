"use client";

import { use } from "react";
import { GlobalContext } from "./Context";

const page = () => {
  const { message } = use(GlobalContext);

  return (
    <div className="flex max-w-7xl mx-auto">
      <button
        onClick={() => {
          alert(message);
        }}
      >
        Click to see Magic
      </button>
    </div>
  );
};

export default page;
