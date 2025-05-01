"use client";

import { redirect } from "next/navigation";
import { home } from "./home";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchImagesStart,
  fetchImagesSuccess,
} from "@/lib/features/images/imagesSlice";

const fetchAndConvertImages = async (
  type = [
    { name: "icon", folder: "1EwD8cJfTPbyC2wJDk_vkrpevYEInEV8B" },
    { name: "photos", folder: "12DgjhdT2vGGpoghrnBPocBkcnz16fNcS" },
    { name: "logo", folder: "1jwKoOzQVNXCFeSHBB_wqznrZ3mY_agSb" },
  ]
) => {
  const allImages = {}; // Initialize an empty object to store images

  for (const item of type) {
    const { name, folder } = item;
    const url = `https://www.googleapis.com/drive/v3/files?q='${folder}'+in+parents&key=AIzaSyC_UwB8sCJfgaCvujcDoUtos6-6N5q7qlA`;
    await fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        for (const item of data.files) {
          const res = await fetch(`/api/image/${item.id}`);
          const data = await res.json();
          if (!allImages[name]) {
            allImages[name] = {}; // Initialize the object for the specific name
          }
          allImages[name][item.name.replace(/\./g, "_")] = data.base64;
        }
      });
  }
};

export default function Home() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.images);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchImagesStart());
      const fetchedImages = await fetchAndConvertImages();
      await dispatch(fetchImagesSuccess(fetchedImages));
      console.log(fetchedImages);
      console.log(images);
      console.log(images.photos);
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <main className="">
        {home.sect.map((sect) => {
          return (
            <div key={sect.id} className="group">
              <div className="group-even:bg-third group-odd:bg-primary px-8 pt-16 pb-16 text-center">
                <div className="m-auto max-w-screen-md">
                  {/* <Image src={images[sect.thumb]} /> */}
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
