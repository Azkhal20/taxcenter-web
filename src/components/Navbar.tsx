"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    title: "TENTANG KAMI",
    subItems: [
      { title: "PROFIL", href: "/" },
      { title: "VISI DAN MISI", href: "/" },
      { title: "TIM KAMI", href: "/" },
      { title: "MITRA KERJASAMA", href: "/" },
    ],
  },
  {
    title: "PROGRAM & LAYANAN",
    subItems: [
      { title: "RELAWAN PAJAK", href: "/" },
      { title: "PENGABDIAN MASYARAKAT", href: "/" },
      { title: "RISET", href: "/" },
      { title: "TAX CLINIC", href: "/" },
    ],
  },
  {
    title: "KEGIATAN & BERITA",
    subItems: [
      { title: "AGENDA KEGIATAN", href: "/" },
      { title: "ARTIKEL PAJAK", href: "/" },
      { title: "PUBLIKASI", href: "/" },
    ],
  },
  {
    title: "EDUKASI PAJAK",
    subItems: [
      { title: "MATERI PAJAK", href: "/" },
      { title: "BINCANG SORE", href: "/" },
      { title: "VIDEO PEMBELAJARAN PAJAK", href: "/" },
    ],
  },
  {
    title: "GALERI",
    subItems: [
      { title: "FOTO KEGIATAN", href: "/" },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const menuRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const timeoutRefs = React.useRef<NodeJS.Timeout[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  // State untuk mendeteksi scroll navbar
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
    setActiveMenu(title);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    const relatedTarget = e.relatedTarget as Node;
    const currentMenu = menuRefs.current.find((ref) => ref?.contains(relatedTarget));
    if (!currentMenu) {
      const timeoutId = setTimeout(() => {
        setActiveMenu(null);
      }, 200);
      timeoutRefs.current.push(timeoutId);
    }
  };

  return (
    <header className="top-0 left-0 w-full flex flex-col z-50 fixed">
      <div className={`w-full text-white hidden lg:flex transition-all duration-100 ease-in-out overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
        style={{ backgroundColor: "#FFD427" }}
      >
        <div className="py-3 w-1/3 lg:w-1/4 bg-[#FFD427] flex items-center justify-end">
          <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-2"/>
          <p className="mr-5 font-light text-sm"> <span className="font-medium">Buka:</span> Senin - Jumat 09-00 - 15.00</p>
        </div>
        <div className="py-3 w-3/4 bg-[#2A176F]"></div>
      </div>
      <div className=" flex justify-center w-full bg-white shadow z-50">
        <div className="container flex items-center justify-between py-3 px-5 lg:px-10">
          <Link href="/">
            <Image
              src="/assets/images/navbar-logo.png"
              alt="Tax Center Gunadarma Logo"
              width={156}
              height={48}
              priority
            />
          </Link>
          <div className= "xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="cursor-pointer">
                  <Menu className="h-6 w-6"/>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-3 mt-16">
                  <SheetTitle className="flex justify-center mb-5">
                      <Image
                        src="/assets/images/navbar-logo.png"
                        alt="Tax Center Gunadarma Logo"
                        width={156}
                        height={48}
                        priority
                      />
                    </SheetTitle>
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      <button
                        className="w-full text-left text-[#2A176F] font-bold px-6 py-2 hover:text-[#F1C40F] hover:bg-[#8D9297]/10 delay-50 ease-in-out duration-200"
                        onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                      >
                        {item.title}
                      </button>
                      {activeMenu === item.title && (
                        <ul className="mt-2 space-y-2 pl-4">
                          {item.subItems.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={sub.href}
                                className="block text-sm font-bold text-[#2A176F] px-6 hover:text-[#F1C40F] hover:bg-[#8D9297]/10 no-underline"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden xl:block relative">
            <ul className="flex space-x-[60px]">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (menuRefs.current[index] = el)}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-[#2A176F] font-bold text-sm cursor-default">
                    {item.title}
                  </span>
                  {activeMenu === item.title && (
                    <ul className="absolute left-0 mt-5.5 w-48 bg-white border-t-3 border-t-yellow-300 shadow-lg">
                      {item.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            className="block pl-3 py-3 text-sm font-bold text-[#2A176F] border-b-1 hover:text-[#F1C40F] hover:bg-[#8D9297]/10"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}