import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link"; // Import Link dari next/link
import { Button } from "@/components/ui/button"; // Mengimport button dari shadcn.ui

export const metadata: Metadata = {
  title: "Artikel Pajak",
  description: "Artikel Pajak",
};

const articles = [
  {
    title: "What Is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/images/foto1.png", // Ganti dengan path gambar asli
  },
  {
    title: "What Is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/images/foto2.png", // Ganti dengan path gambar asli
  },
  {
    title: "What Is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/images/foto3.png", // Ganti dengan path gambar asli
  },
  {
    title: "What Is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/images/foto4.png", // Ganti dengan path gambar asli
  },
];

export default function ArtikelPajak() {
  return (
    <>
      {/* Header Section */}
      <div className="relative pt-[70px] lg:pt-[120px] max-w-full overflow-hidden select-none">
        <div className="relative w-full h-[250px] lg:h-[280px] flex flex-col items-center justify-center text-slate-900">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
            ARTIKEL PAJAK
          </h1>
          <p className="text-sm md:text-base text-center mx-4 md:mx-0 max-w-3xl font-normal leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry&rsquo;s standard
            dummy text ever since <br /> the 1500s, when an unknown printer
            took.
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/" passHref>
              <Button className="rounded-full px-6 md:px-7 h-8 md:h-9 bg-[#2A176F] text-white hover:opacity-30">
                Sort
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 md:px-6 xl:px-40 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {articles.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md overflow-hidden bg-white"
              >
                <div className="bg-[#D9D9D9] w-full h-[200px] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 text-justify">
                    {item.description}
                  </p>
                  {/* Button Section */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
