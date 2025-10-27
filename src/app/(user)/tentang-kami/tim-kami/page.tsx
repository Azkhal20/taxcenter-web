import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import DivisionList from "@/components/Accordion/DivisionList";

export const metadata: Metadata = {
  title: "Tim Kami",
  description: "Tim Kami",
};

type SizeKey = "xl" | "lg3";

type TeamCardProps = {
  name: string;
  role: string;
  photo: string;
  bgCapsule: string;   // PNG kapsul+sabit (transparan)
  size?: SizeKey;
  overrides?: Partial<{
    width: number;         // lebar kapsul px (konstan)
    height: number;        // tinggi kapsul px
    avatar: number;        // diameter avatar px
    avatarLeftPct: number; // posisi tengah avatar dari kiri (%)
    textLeftPct: number;   // posisi awal teks dari kiri (%)
  }>;
};

const PRESET: Record<SizeKey, {
  width: number;
  height: number;
  avatar: number;
  avatarLeftPct: number;
  textLeftPct: number;
  nameClass: string;
  roleClass: string;
}> = {
  xl: {
    width: 400,
    height: 140,
    avatar: 105,
    avatarLeftPct: 19,
    textLeftPct: 36,
    nameClass: "text-[14px]",
    roleClass: "text-[12px]",
  },
  lg3: {
    width: 400,
    height: 140,
    avatar: 105,
    avatarLeftPct: 19,
    textLeftPct: 36,
    nameClass: "text-[14px]",
    roleClass: "text-[12px]",
  },
};

function TeamCard({
  name,
  role,
  photo,
  bgCapsule,
  size = "xl",
  overrides,
}: TeamCardProps) {
  const p = PRESET[size];
  const cfg = {
    width: overrides?.width ?? p.width,
    height: overrides?.height ?? p.height,
    avatar: overrides?.avatar ?? p.avatar,
    avatarLeftPct: overrides?.avatarLeftPct ?? p.avatarLeftPct,
    textLeftPct: overrides?.textLeftPct ?? p.textLeftPct,
    nameClass: p.nameClass,
    roleClass: p.roleClass,
  };
  const widthStyle = { width: `min(100%, ${cfg.width}px)` };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative" style={{ ...widthStyle, height: cfg.height }}>
        {/* Kapsul PNG tidak overflow */}
        <Image
          src={bgCapsule}
          alt=""
          fill
          className="object-fill select-none pointer-events-none"
          loading="lazy"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10"
          style={{
            left: `${cfg.avatarLeftPct}%`,
            transform: "translate(-50%)",
            width: cfg.avatar,
            height: cfg.avatar,
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#BCBCBC] border-8 border-[#DBDBDB] shadow">
            <Image src={photo} alt={name} fill className="object-contain" sizes={`${cfg.avatar}px`} />
          </div>
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 min-w-0 z-10 pr-3"
          style={{
            left: `${cfg.textLeftPct}%`,
            width: `calc(100% - ${cfg.textLeftPct}% - 12px)`,
          }}
        >
          <h3 className={`${cfg.nameClass} font-semibold text-neutral-900 leading-tight truncate`}>
            {name}
          </h3>
          <p className={`${cfg.roleClass} text-neutral-600 leading-snug truncate`}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TimKami() {
  const CAPSULE = "/assets/images/tim/container-tim.png";

  const HR_STYLE = { width: `min(100%, ${PRESET.xl.width}px)` };

  return (
    <div className="relative pt-[70px] lg:pt-[120px]">
      {/* Header */}
      <div className="w-full h-[150px] md:h-[200px] bg-[#D9D9D9] flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">STRUKTUR ORGANISASI</h1>
      </div>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 md:py-16 space-y-12">
          {/* Gambar Atas*/}
          <div className="grid place-items-center">
            <TeamCard
              name="Prof. Dr. E. S. Margianti, SE., MM."
              role="Rektor Universitas Gunadarma"
              photo="/assets/images/tim/Rektor.webp"
              bgCapsule={CAPSULE}
              size="xl"
              overrides={{ avatarLeftPct: 18, textLeftPct: 36, avatar: 105 }}
            />
          </div>

          <hr className="border-t-2 border-[#D9D9D9] mx-auto" style={HR_STYLE} />

          {/* Gambar Tengah */}
          <div className="grid place-items-center">
            <TeamCard
              name="Dr. Beny Susanti, SE., MM."
              role="Ketua Tax Center"
              photo="/assets/images/tim/busanti.webp"
              bgCapsule={CAPSULE}
              size="xl"
              overrides={{ avatarLeftPct: 18, textLeftPct: 36, avatar: 105 }}
            />
          </div>

          <hr className="border-t-2 border-[#D9D9D9] mx-auto" style={HR_STYLE} />

          {/* Gambar Bawah */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12 lg:gap-16 justify-items-center">
            <TeamCard
              name="Dr. Feni Andriani, S.Si, M.Si."
              role="Divisi Riset dan Pengembangan IT"
              photo="/assets/images/tim/bufeni.webp"
              bgCapsule={CAPSULE}
              size="lg3"
              overrides={{ avatarLeftPct: 19, textLeftPct: 36 }}
            />
            <TeamCard
              name="Dr. Dewi Putrie Lestari, S.Si., M.Si."
              role="Divisi Relawan Pajak"
              photo="/assets/images/tim/budewi.webp"
              bgCapsule={CAPSULE}
              size="lg3"
              overrides={{ avatarLeftPct: 19, textLeftPct: 34 }}
            />
            <TeamCard
              name="Dr. Nola Marina, S.Si, M.Si"
              role="Divisi Pengabdian Masyarakat"
              photo="/assets/images/tim/bunola.webp"
              bgCapsule={CAPSULE}
              size="lg3"
              overrides={{ avatarLeftPct: 19, textLeftPct: 36 }}
            />
          </div>
        </div>
      </section>
      <DivisionList />
    </div>
  );
}