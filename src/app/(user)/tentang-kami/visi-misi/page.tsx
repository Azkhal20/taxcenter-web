import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visi Misi",
  description: "Visi Misi",
};

const VisiMisi = () => {
  return (
    <>
      <div className="relative pt-[70px] lg:pt-[120px] max-w-full overflow-hidden select-none">
            <div className="relative w-full h-[150px] md:h-[200px] bg-[#D9D9D9] flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold">VISI & MISI</h1>
            </div>
        </div>
    </>
  )
};

export default VisiMisi;
