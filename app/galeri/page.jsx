"use client";

import LoadingWraper from "@/components/LoadingWraper";

import { useState } from "react";
import { galeri } from "../data";

export default function Galeri() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <LoadingWraper time={1000}>
        <section className="px-4 py-10">
          <h2 className="mb-6 font-bold text-3xl text-center">Galeri</h2>
          <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galeri.toReversed().map((item, index) => (
              <div
                key={index}
                className="rounded-lg w-full h-48 overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImg(item)}
                />
              </div>
            ))}
          </div>

          {/* Popup */}
          {selectedImg && (
            <div
              className="z-50 fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedImg(null)}
            >
              <div
                className="relative mx-4 w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="top-2 right-2 fixed font-bold text-white text-2xl"
                  onClick={() => setSelectedImg(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  className="shadow-xl rounded w-full h-auto"
                />
                <p className="mt-2 text-white text-center">{selectedImg.alt}</p>
              </div>
            </div>
          )}
        </section>
      </LoadingWraper>
    </div>
  );
}
