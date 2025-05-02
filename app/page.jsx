"use client";

import { redirect } from "next/navigation";
import { home, sosmed } from "./data";
import Header from "@/components/Header";

import { useState } from "react";

export default function Home() {
  const [isClick, setIsClick] = useState(null);

  const handleClickFaq = (index) => () => {
    setIsClick(isClick === index ? null : index);
  };
  return (
    <div className="">
      <Header data={home.header} />
      <main className="relative flex flex-col">
        {home.sect.map((sect) => {
          return (
            <div
              key={sect.id}
              className="group shadow-extra -mb-10 md:-mb-16 rounded-t-4xl md:rounded-t-[60px] overflow-hidden"
            >
              <div className="group-even:bg-third group-odd:bg-primary px-8 py-28 md:pt-16 md:pb-36 md:text-left text-center">
                <div className="md:flex gap-14 m-automax-w-screen-md">
                  <div className="md:flex flex-1/2 mb-10 md:mb-0">
                    <div className="shadow-standard m-auto rounded-2xl md:rounded-4xl h-auto overflow-hidden">
                      <img src={sect.thumb} className="w-full" />
                    </div>
                  </div>
                  <div className="flex-1/2">
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
              </div>
              {/* <div className="group-even:bg-linear-to-t group-odd:bg-linear-to-b from-primary to-third h-28"></div> */}
            </div>
          );
        })}
        <div className="relative -mt-16 -mb-16">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-standard w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,160 1080,0 1440,80 L1440,200 L0,200 Z"
              fill="white"
            />
          </svg>
          <section className="bg-white px-4 py-10 pb-28">
            <h2 className="mb-8 font-bold text-3xl text-center">GALERI</h2>
            <div
              className="justify-items-center gap-2 grid my-8"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              }}
            >
              {home.galeri?.map((foto) => (
                <div
                  key={foto.id}
                  tabIndex={0}
                  className="rounded-lg w-full h-48 overflow-hidden"
                >
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    title={foto.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="/galeri"
                className="inline-block bg-third shadow-standard hover:shadow-md active:shadow-sm px-3 py-1 rounded-lg text-white transition-transform duration-200 ease-in-out"
              >
                Lebih Banyak
              </a>
            </div>
          </section>
        </div>
        <div className="relative -mt-16 -mb-16">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-standard w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,160 1080,0 1440,80 L1440,200 L0,200 Z"
              fill="#fbf6e9"
            />
          </svg>
          <section className="bg-primary px-4 py-16">
            <h2 className="mb-8 font-bold text-3xl text-center">FAQ</h2>
            <div
              className="gap-x-5 gap-y-2 grid mx-5"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              }}
            >
              {home.faqs?.map((faq, i) => (
                <div
                  key={i}
                  onClick={handleClickFaq(i)}
                  className={`w-full transition-[height] duration-300 ease-in-out overflow-hidden rounded-lg shadow p-3 bg-white mx-auto ${
                    i === isClick ? "h-[216px]" : "h-[78px]"
                  }`}
                >
                  <p className="mb-2 font-semibold text-sm 500:text-base text-left">
                    {faq.question}
                  </p>
                  <div
                    className={`transition-opacity duration-500 ${
                      i === isClick
                        ? "opacity-100 animate-reveal"
                        : "opacity-0 animate-unreveal"
                    }`}
                  >
                    <p
                      className="bg-gray-200 p-2 rounded text-sm text-left"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-standard w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,160 1080,0 1440,80 L1440,200 L0,200 Z"
              fill="#5db996"
            />
          </svg>
          <div className="-top-1 relative md:flex gap-5 bg-third -mb-20 px-4 pb-28">
            <div className="flex-1/2">
              <h2 className="mb-4 font-semibold text-xl text-center">
                Kontak Informasi
              </h2>
              <div className="bg-gray-100 shadow-md mx-auto mb-16 p-6 rounded-lg max-w-3xl text-center">
                <p>
                  <strong>Alamat:</strong> Jl. Thamrin No. 1, Desa Cibening
                  Kecamatan Pamijahan Kabupaten Bogor
                </p>

                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/6285691962354"
                    className="text-blue-600"
                  >
                    0856-9196-2354
                  </a>
                </p>
                <div className="flex justify-center gap-5">
                  {sosmed.map((sosmed) => {
                    return (
                      <a
                        href={sosmed.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                        key={sosmed.alt}
                      >
                        <img
                          src={sosmed.logo}
                          className="w-10"
                          alt={sosmed.alt}
                          title={sosmed.alt}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1/2">
              <h2 className="mb-4 font-semibold text-xl text-center">
                Lokasi Sekolah
              </h2>
              <div className="shadow-md mx-auto rounded-lg max-w-3xl overflow-hidden">
                <iframe
                  title="Lokasi SMK Al-Amin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.07538451309233!2d106.67192188026331!3d-6.634766941117376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d081a1b52263%3A0x36891f5e6b6b1207!2sSMK%20AL%20AMIN!5e0!3m2!1sid!2sid!4v1746168560704!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
