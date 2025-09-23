import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil",
  description: "Profil",
};

export default function Profil() {
  return (
    <>
      {/* Header Section */}
      <div className="relative pt-[70px] lg:pt-[120px] max-w-full overflow-hidden select-none">
        <div className="relative w-full h-[150px] md:h-[200px] bg-[#D9D9D9] flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">PROFIL</h1>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="flex items-center justify-center">
        <p className="text-xs md:text-sm lg:text-base max-w-5xl py-12 px-5 text-center leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          faucibus lacinia tempor. Suspendisse fermentum ex vitae mattis
          dapibus. Maecenas pharetra semper lectus eget ultrices. Aliquam erat
          volutpat. Duis ante nisi, luctus non molestie et, mollis non lacus.
          In ac molestie sem. Pellentesque volutpat est sapien, sed congue nibh
          consectetur eget.
        </p>
      </div>

      {/* Section Sejarah */}
      <section className="max-w-6xl mx-auto px-7 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-10">
          {/* Text Container */}
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl lg:text-3xl mb-6 xl:mb-12">Sejarah Tax Center Gunadarma</h2>
            <p className="text-sm font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus lacinia
              tempor. Suspendisse fermentum ex vitae mattis dapibus. Maecenas pharetra semper lectus
              eget ultrices. Aliquam erat volutpat. Duis ante nisi, luctus non molestie et, mollis
              non lacus. In ac molestie sem. Pellentesque volutpat est sapien, sed congue nibh
              consectetur eget.
              <br />
              Vivamus aliquet erat vitae rutrum fringilla. Nullam facilisis auctor velit, sit amet
              mollis arcu aliquam ac. Sed at tincidunt justo. Praesent ligula turpis, accumsan a quam
              a, molestie dapibus risus. Quisque hendrerit feugiat diam a tempus. In hac habitasse
              platea dictumst. Mauris dapibus cursus justo, nec faucibus magna pulvinar eu.
            </p>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 mt-8 md:mt-0 border border-gray-300 w-full h-full object-cover rounded-lg max-h-[350px] text-center">
            <Image
              src="/"
              alt="Gambar Sejarah Tax Center Gunadarma"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section Peran Dan Fungsi */}
      <div className="bg-[#F5FAFF]">
        <section className="max-w-6xl mx-auto px-7 py-12 mt-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-10">
            
            {/* Container untuk judul + gambar + kotak di sm */}
            <div className="w-full flex flex-col items-center md:w-1/3">
              {/* Judul */}
              <h2 className="font-bold text-2xl sm:text-3xl mb-6 text-center md:hidden">
                Peran Dan Fungsi
              </h2>

              {/* Gambar */}
              <div className="w-full max-h-[300px] border border-gray-300 rounded-lg overflow-hidden mb-8 flex justify-center">
                <Image
                  src="/"
                  alt="Gambar Peran & Fungsi"
                  width={400}
                  height={350}
                  className="w-full h-auto rounded-lg object-cover"
                  priority
                />
              </div>

              {/* Kotak */}
              <div className="md:hidden grid grid-cols-2 gap-6 w-full">
                {[
                  "Memberikan edukasi perpajakan kepada masyarakat.",
                  "Menjadi pusat informasi dan kajian perpajakan.",
                  "Menjalin kerja sama dengan instansi terkait.",
                  "Meningkatkan kesadaran dan kepatuhan pajak.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="border-3 border-[#FE8100] rounded-md p-5 text-center text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-default"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Container judul + teks untuk md */}
            <div className="hidden md:flex md:flex-col md:w-2/3">
              {/* Judul */}
              <h2 className="font-bold text-3xl mb-12 xl:mb-13 text-left">
                Peran Dan Fungsi
              </h2>

              {/* Kotak */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Memberikan edukasi perpajakan kepada masyarakat.",
                  "Menjadi pusat informasi dan kajian perpajakan.",
                  "Menjalin kerja sama dengan instansi terkait.",
                  "Meningkatkan kesadaran dan kepatuhan pajak.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="border-3 border-[#FE8100] rounded-md p-5 text-center text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-default"
                  >
                    {text}
                  </div>
                ))}
              </div>
          </div>
        </div>
        </section>
      </div>


      {/* Section Layanan */}
      <section className="max-w-6xl mx-auto px-7 py-12 mt-6">
        <h2 className="font-bold text-2xl md:text-3xl mb-12">Layanan</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-12">
          {[
            "Konsultasi perpajakan dasar",
            "Pelatihan dan seminar pajak",
            "Pendampingan pengisian SPT",
            "Program relawan dan magang pajak",
            "Edukasi pajak untuk UMKM dan pelajar",
            "Kajian dan publikasi di bidang perpajakan",
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-[#281A70] text-white rounded-md py-6 lg:py-10 px-3 text-center text-xs sm:text-sm font-semibold cursor-default"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Section VISI & MISI */}
      <div className="bg-[#F5FAFF]">
        <section className="max-w-6xl mx-auto px-7 py-12 mt-6">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-12">VISI & MISI</h2>
          
          <div className="flex flex-col md:flex-row md:items-start md:space-x-10">
            {/* Adjust image size and make height auto, not fixed */}
            <div className="w-full md:w-2/5 mb-10 md:mb-0 flex-shrink-0 max-h-[400px] border border-gray-300 overflow-hidden rounded-lg">
              <Image
                src="/"
                alt="Gambar Visi & Misi"
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>

            {/* Text content */}
            <div className="w-full md:w-2/3 space-y-10 text-sm md:text-base">
              {/* Visi */}
              <div>
                <h3 className="font-bold mb-3 text-lg">Visi</h3>
                <p className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-black" />
                  Menjadi Tax Center Terbaik dalam Mewujudkan Masyarakat yang Sadar dan Peduli Pajak
                </p>
              </div>

              {/* Misi */}
              <div>
                <h3 className="font-bold mb-3 text-lg">Misi</h3>
                <ul className="list-none space-y-3">
                  {[
                    "Sebagai pusat informasi perpajakan yang membantu masyarakat kampus dalam pengembangan Pengetahuan, pendidikan perpajakan, serta pemenuhan kewajibannya di bidang perpajakan.",
                    "Membantu Perguruan Tinggi dan lembaga yang ada dalam melaksanakan pemenuhan kewajiban di bidang perpajakan.",
                    "Menyelenggarakan seminar, penelitian, sertifikasi dan pendidikan di bidang perpajakan.",
                    "Turut membantu dan mensosialisasikan program pemerintah di sektor perpajakan.",
                    "Menjadi model Tax Center untuk Perguruan-Perguruan Tinggi di Indonesia"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-black flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};