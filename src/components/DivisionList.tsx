'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

type DivisionListProps = {
  items?: string[];
  maxWidth?: number;
};

const DEFAULT_ITEMS = [
    'Divisi Abdimas',
    'Divisi Brevet',
    'Divisi Digital Marketing',
    'Divisi Humas dan Kerjasama',
    'Divisi Inklusi',
    'Divisi IT',
    'Divisi Multimedia',
    'Divisi Relawan Pajak',
    'Divisi Tax Clinic',
];

export default function DivisionList({
  items = DEFAULT_ITEMS,
  maxWidth = 1024,
}: DivisionListProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section>
      <div className="mx-auto w-full px-6 sm:px-8 py-10 md:py-12" style={{ maxWidth }}>
        <h2 className="text-center mb-7 text-2xl md:text-3xl font-bold">Anggota Divisi</h2>

        <ul className="divide-y divide-[#D9D9D9]">
          {items.map((label, i) => {
            const isOpen = openIdx === i;
            return (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 md:py-5 hover:bg-black/5 rounded transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium text-neutral-900">
                    {label}
                  </span>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronDown : faChevronRight}
                    className="h-4 w-4 text-neutral-800"
                  />
                </button>

                {/* Konten expand—opsional (kosong dulu agar match desain) */}
                {isOpen && (
                  <div className="pb-4 text-sm text-neutral-600">
                    {/* Tempatkan daftar anggota jika diperlukan */}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
