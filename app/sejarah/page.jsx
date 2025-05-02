"use client";

import Header from "@/components/Header";
import LoadingWraper from "@/components/LoadingWraper";
import { sejarah } from "../data";

export default function Sejarah() {
  return (
    <div>
      <LoadingWraper time={1000}>
        <Header data={sejarah.header} />
        <main className="relative bg-primary shadow-standard -mb-16 p-7 md:p-10 rounded-t-4xl md:rounded-t-[60px]">
          <h1 className="mb-5 font-bold text-xl md:text-2xl">
            Sejarah SMK Al Amin
          </h1>
          {sejarah.all.map((text) => {
            return (
              <div key={text.id} className="mb-5">
                <p
                  className="text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: text.text }}
                ></p>
              </div>
            );
          })}
        </main>
      </LoadingWraper>
    </div>
  );
}
