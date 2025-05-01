"use client";

import { useSelector } from "react-redux";

export default function LoadingWraper({ children }) {
  const loading = useSelector((state) => state.image.isLoading);

  return (
    <>
      {children}
      {loading && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-white">
          <div className="loader">Loading...</div>
        </div>
      )}
    </>
  );
}
