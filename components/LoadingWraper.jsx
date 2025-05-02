"use client";

import { useEffect, useState } from "react";

export default function LoadingWraper({ children, time }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, time);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {children}

      <div
        className={`z-10 fixed inset-0 justify-center items-center flex  ${
          !loading && "hidden"
        }  bg-white/50 backdrop-blur-sm transition-all`}
      >
        <div className="loader">Loading...</div>
      </div>
    </>
  );
}
