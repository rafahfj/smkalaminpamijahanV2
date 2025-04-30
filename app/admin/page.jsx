"use client";

import Link from "next/link";

export default function Admin() {
  return (
    <div className="p-4">
      <h1 className="mb-5 font-bold text-xl">Hi Admin</h1>
      <ul>
        <li className="underline">
          <Link href={"/admin/data_manager"}>Data Manager</Link>
        </li>
        <li className="underline">
          <Link href={"/admin/file_manager"}>File Manager</Link>
        </li>
      </ul>
    </div>
  );
}
