"use client";

import Header from "@/components/Header";
import LoadingWraper from "@/components/LoadingWraper";
import { ekskul } from "../data";

export default function Ekskul() {
  return (
    <div>
      <LoadingWraper time={1000}>
        <Header data={ekskul.header} />
        <main className="relative">
          {ekskul.all.map((ekskul) => {
            return (
              <div
                key={ekskul.id}
                className="group md:flex md:even:flex-row md:odd:flex-row-reverse items-center md:gap-6 even:bg-third odd:bg-primary shadow-standard -mb-20 p-7 md:p-12 pb-36 md:pb-40 rounded-t-4xl md:rounded-t-[60px]"
              >
                <div className="flex-1/2 shadow-standard m-10 md:m-0 rounded-2xl md:rounded-4xl h-auto overflow-hidden">
                  <img src={ekskul.thumb} alt="" className="w-full" />
                </div>
                <div className="flex-1/2">
                  <h2 className="mb-3 font-bold text-lg md:text-xl md:group-even:text-left text-center md:group-odd:text-right">
                    {ekskul.title}
                  </h2>
                  <p
                    className="text-sm md:text-base md:group-even:text-left text-center md:group-odd:text-right"
                    dangerouslySetInnerHTML={{ __html: ekskul.text }}
                  ></p>
                </div>
              </div>
            );
          })}
        </main>
      </LoadingWraper>
    </div>
  );
}
