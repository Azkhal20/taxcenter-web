import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import AccordionComponent from "@/components/Accordion/Layanan";

const items = [
  {
    title: "Coretax",
    content: "Penjelasan tentang Coretax.",
    image: "/assets/images/video1.png", 
  },
  {
    title: "Pembuatan NPWP",
    content: "Penjelasan tentang pembuatan NPWP.",
    image: "/assets/images/video2.png",
  },
  {
    title: "Pengisian SPT",
    content: "Penjelasan tentang pengisian SPT.",
    image: "/assets/images/video3.png",
  },
  {
    title: "Pembuatan E-Billing",
    content: "Penjelasan tentang pembuatan E-Billing.",
    image: "/assets/images/video4.png",
  },
];

export const metadata: Metadata = {
  title: "Tax Clinic",
  description: "Tax Clinic",
};

export default function TaxClinic() {
  return (
    <>
      {/* Header Section */}
      <div className="relative pt-[70px] lg:pt-[120px] max-w-full overflow-hidden select-none">
        <div className="relative w-full h-[150px] md:h-[200px] bg-[#D9D9D9] flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">TAX CLINIC</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-16 xl:px-32">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-3/4">
            <p className="text-sm md:text-base lg:text-lg text-gray-700 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/assets/images/tax-clinic.png"
              alt="Tax Clinic"
              className="w-auto h-auto"
              width={350}
              height={300}
              priority
            />
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section className="py-12 px-4 md:px-16 xl:px-32 bg-[#F5FAFF]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">LAYANAN</h2>
        <h2 className="text-xl md:text-2xl font-semibold text-[#2A176F] mb-8">Informasi dan Edukasi</h2>
        <AccordionComponent items={items} />
      </section>

      {/* Asistensi Pelaporan Pajak */}
      <section className="py-12 px-4 md:px-16 xl:px-32 bg-white">
        <h2 className="text-xl md:text-2xl font-bold text-[#2A176F] mb-8">Asistensi Pelaporan Perpajakan</h2>
        <div className="flex flex-col gap-6">
          <div className="border-3 border-[#FE8100] py-6 px-6 lg:px-10 rounded-md text-justify">
            <h3 className="text-xl font-semibold mb-4">WP OP</h3>
            <p className="text-sm md:text-base text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="border-3 border-[#FE8100] py-6 px-6 lg:px-10 rounded-md text-justify">
            <h3 className="text-xl font-semibold mb-4">WP Badan</h3>
            <p className="text-sm text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}