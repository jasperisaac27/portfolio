import React from "react";
import Image from "next/image";
import informal_pic from "@/public/informal_pic.jpg";

export default function Info() {
  return (
    <div className="flex flex-col items-center px-12 my-8 xl:max-w-md">
      <div className="flex mt-8 overflow-hidden transition-all rounded-lg shadow-lg w-fit ">
        <Image
          src={informal_pic}
          width={300}
          height={300}
          alt="Informal Pic"
          className="flex-shrink-0 w-full h-full "
        />
      </div>
      <div className="w-full mt-4 rounded-md bg-black/25 ">
        <div className="flex flex-col items-center text-center ">
          <h2 className="mt-4 text-xl font-bold text-white">Jasper Isaac</h2>
          <h3 className="text-sm font-bold text-red-500">Software Developer</h3>
          <a
            href="mailto:jasperisaac27@gmail.com"
            className="text-xs text-red-400"
          >
            jasperisaac27@gmail.com
          </a>
        </div>

        <div className="mt-8 mb-8 text-center text-white ">
          <h3 className="text-center">
            {"<"}TLDR{">"}
          </h3>
          <p>Self-taught</p>
          <p>Full-stack</p>
          <p>4 Years of Experience</p>
          <p>SQL, NOSQL</p>
          <p>React, Next, Svelte</p>
          <p>Node, MongoDB, Supabase</p>
          {"</"}TLDR{">"}
        </div>
      </div>
    </div>
  );
}
