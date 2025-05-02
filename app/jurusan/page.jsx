"use client";

import Header from "@/components/Header";
import LoadingWraper from "@/components/LoadingWraper";
import { jurusan } from "../data";

export default function Jurusan() {
  return (
    <div>
      <LoadingWraper time={1000}>
        <Header data={jurusan.header} />
        <main className="relative">
          {jurusan.all.map((jurusan) => {
            return (
              <div
                key={jurusan.id}
                className="group md:flex md:odd:flex-row md:even:flex-row-reverse md:gap-6 even:bg-third odd:bg-primary shadow-standard -mb-20 p-7 md:p-12 pb-36 md:pb-40 rounded-t-4xl md:rounded-t-[60px]"
              >
                <div className="flex-1/2">
                  <div className="shadow-standard m-6 md:m-0 rounded-2xl md:rounded-4xl h-auto overflow-hidden">
                    <img src={jurusan.thumb} alt="" className="w-full" />
                  </div>
                </div>
                <div className="flex-1/2">
                  <h2 className="mb-3 font-bold text-lg md:text-xl md:group-odd:text-left text-center md:group-even:text-right">
                    {jurusan.title}
                  </h2>
                  <p
                    className="text-sm md:text-base md:group-odd:text-left text-center md:group-even:text-right"
                    dangerouslySetInnerHTML={{ __html: jurusan.text }}
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
