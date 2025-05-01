"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("up");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setDirection("down"); // Gulir ke bawah
      } else {
        setDirection("up"); // Gulir ke atas
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`top-0 right-0 left-0 fixed bg-primary/20 shadow-md backdrop-blur-sm transition-transform duration-300 ${
          direction === "down" && scrollY > 100
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <ul className="flex justify-between p-4">
          <li className="mini-logo">
            {/* <img src={props.data?.logo} alt={props.data?.alt} /> */}
            <p className="font-bold text-lg">SMK Al Amin</p>
          </li>
          <li className="parentNav">
            <div className="md:hidden relative">
              <input
                type="checkbox"
                id="menu-toggle"
                className="peer hidden"
                value={menu}
                onChange={() => (menu ? setMenu(false) : setMenu(true))}
              />

              {/* Burger Menu */}
              <label
                htmlFor="menu-toggle"
                className="z-50 relative flex flex-col justify-between items-center w-7 h-7 cursor-pointer"
              >
                <span
                  className={`bg-black rounded w-full h-1 origin-center transition-all ${
                    menu ? "translate-y-3 rotate-45" : ""
                  } duration-300`}
                ></span>
                <span
                  className={`bg-black ${
                    menu ? "opacity-0" : ""
                  } rounded w-full h-1 transition-all duration-300`}
                ></span>
                <span
                  className={`bg-black rounded w-full h-1 origin-center transition-all ${
                    menu ? "-translate-y-3 -rotate-45" : ""
                  } duration-300`}
                ></span>
              </label>
            </div>

            <ul className="hidden md:flex gap-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/sejarah"}>Sejarah</Link>
              </li>
              <li>
                <Link href={"/jurusan"}>Jurusan</Link>
              </li>
              <li>
                <Link href={"/ekskul"}>Ekskul</Link>
              </li>
              <li>
                <Link href={"/pengajar"}>Pengajar</Link>
              </li>
              <li>
                <Link href={"/galeri"}>Galeri</Link>
              </li>
              <li>
                <Link href={"/ppdb"}>PPDB</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        className={`top-0 left-0 fixed bg-primary backdrop-blur-md w-[250px] h-[100vh] transition-transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } duration-500`}
      >
        <ul className="flex flex-col items-end gap-5 p-10 h-full text-black">
          <li>
            <Link href={"/"} className="font-semibold hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/sejarah"}
              className="font-semibold hover:text-gray-500"
            >
              Sejarah
            </Link>
          </li>
          <li>
            <Link
              href={"/jurusan"}
              className="font-semibold hover:text-gray-500"
            >
              Jurusan
            </Link>
          </li>
          <li>
            <Link
              href={"/ekskul"}
              className="font-semibold hover:text-gray-500"
            >
              Ekskul
            </Link>
          </li>
          <li>
            <Link
              href={"/pengajar"}
              className="font-semibold hover:text-gray-500"
            >
              Pengajar
            </Link>
          </li>
          <li>
            <Link
              href={"/galeri"}
              className="font-semibold hover:text-gray-500"
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              href={"/kontak"}
              className="font-semibold hover:text-gray-500"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
