"use client";

import Header from "@/components/Header";
import LoadingWraper from "@/components/LoadingWraper";
import { pengajar } from "../data";
import { useState } from "react";

const TeacherCard = ({ person, expandable = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-7 text-center cursor-pointer"
      onClick={() => expandable && setIsOpen(!isOpen)}
    >
      <img
        src={person.thumb}
        alt={person.name}
        className="shadow-md mx-auto rounded-full w-32 h-32 object-cover"
      />
      <p className="mt-2 font-semibold text-base">{person.name}</p>
      <p className="text-gray-600 text-sm">{person.title}</p>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-50 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        {person.text && (
          <div className="bg-gray-100 shadow p-3 rounded text-gray-700 text-sm">
            {person.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default function TeachersPage() {
  return (
    <LoadingWraper time={1000}>
      <Header data={pengajar.header} />
      <section className="relative space-y-12 bg-primary -mb-16 p-8 pt-14 rounded-t-4xl transition-[height] duration-300">
        {/* Kepsek */}
        <div className="text-center">
          <h2 className="mb-4 font-bold text-2xl">Kepala Sekolah</h2>
          <TeacherCard person={pengajar.kepsek} expandable />
        </div>

        {/* Kepengurusan Inti */}
        <div>
          <h2 className="mb-4 font-bold text-2xl text-center">
            Kepengurusan Inti
          </h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {pengajar.inti.map((p) => (
              <TeacherCard key={p.id} person={p} expandable />
            ))}
          </div>
        </div>

        {/* Guru Lainnya */}
        <div>
          <h2 className="mb-4 font-bold text-2xl text-center">Guru Lainnya</h2>
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {pengajar.sisa.map((p, i) => (
              <TeacherCard key={`${p.id}-${i}`} person={p} />
            ))}
          </div>
        </div>
      </section>
    </LoadingWraper>
  );
}
