"use client";

import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const back = () => {
    redirect(-1);
  };

  return (
    <div className="z-10 relative bg-[--background] pt-16 w-full">
      <nav className="top-0 right-0 left-0 fixed flex gap-5 bg-[--background] shadow-[--foreground] shadow-standard p-4">
        <div>
          <button onClick={back}>{"<"}</button>
        </div>
        <h1>Admin Panel</h1>
      </nav>
      {children}
    </div>
  );
}
