"use client";

import { redirect } from "next/navigation";
import { home } from "./home";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [photo, setPhoto] = useState(null);

  useEffect(async () => {
    const data = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/raf-social-media.appspot.com/o/profileImage%2FDDt3Lq3b71dpXVcK4mKvz8CmmYr1?alt=media&token=c120fc28-1508-4c88-a804-6713dff1b846"
    ).then((res) => res);
    setPhoto(data);
  }, []);

  return (
    <div className="">
      <main className="">
        {home.sect.map((sect) => {
          return (
            <div key={sect.id} className="group">
              <div className="group-even:bg-third group-odd:bg-primary px-8 pt-16 pb-16 text-center">
                <div className="m-auto max-w-screen-md">
                  <Image src={photo} />
                  <h2 className="mb-6 font-bold text-xl">{sect.title}</h2>
                  <p
                    className="mb-7 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: sect.text }}
                  ></p>
                  <button
                    onClick={() => redirect(`/${sect.href}`)}
                    className="group-even:bg-primary group-odd:bg-third shadow-standard px-3 py-1.5 rounded-lg"
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
              <div className="group-even:bg-linear-to-t group-odd:bg-linear-to-b from-primary to-third h-28"></div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
