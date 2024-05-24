"use client";

import { createContext } from "react";

const GlobalContext = createContext({
  message: "",
});

function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContext.Provider
      value={{
        message: "Hello, world!",
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
