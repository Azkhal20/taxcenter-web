import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publikasi",
  description: "Publikasi",
};

export default function Publikasi() {
  return (
    <>
      <div className="relative pt-[70px] lg:pt-[120px] max-w-full overflow-hidden select-none">
        <div className="relative w-full h-[200px] lg:h-[220px] bg-[#D9D9D9] flex flex-col items-center justify-center text-slate-900">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
            Publikasi
          </h1>
          <p className="text-sm md:text-base text-center mx-4 md:mx-0 max-w-3xl font-normal leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry&rsquo;s standard
            dummy text ever since <br /> the 1500s, when an unknown printer
            took.
          </p>
        </div>
      </div>
    </>
  );
}
