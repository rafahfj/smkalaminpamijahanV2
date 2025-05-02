import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-third shadow-standard mt-10 md:mt-16 pt-5 text-sm 600:text-base">
      <div className="flex 600:flex-row flex-col justify-between gap-5 md:gap-0 bg-primary shadow-standard p-5 md:p-7">
        <div>
          <h1 className="font-bold text-lg">SMK AL AMIN</h1>
          <h2>
            Jalan Thamrin No. 1 <br />
            Desa Cibening Kecamatan Pamijahan <br />
            Kabupaten Bogor <br />
            16810
          </h2>
        </div>
        <div>
          <ul className="flex 600:flex-col flex-wrap gap-2 600:gap-0 600:text-right">
            <li>
              <Link className="underline" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/sejarah"}>
                Sejarah
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/jurusan"}>
                Jurusan
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/ekskul"}>
                Ekskul
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/pengajar"}>
                Pengajar
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/galeri"}>
                Galeri
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/ppdb"}>
                PPDB
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary">
        <p className="font-code text-[11px] md:text-sm text-center">
          Copyright © 2024 |
          <a
            href="https://rafahfajrijuwaeni.vercel.app"
            target="blank"
            className="underline"
          >
            Rafah Fajri Juwaeni
          </a>
        </p>
      </div>
    </footer>
  );
}
