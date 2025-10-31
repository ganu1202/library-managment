"use client";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BookDetail() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
      {/* LEFT SIDE (INFO SECTION) */}
      <div className="flex flex-col justify-center w-full md:max-w-[500px]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Origin</h1>

        <div className="flex flex-wrap items-center gap-2 text-gray-400 mb-3 text-sm md:text-base">
          <span>By</span>
          <span className="text-[#ffd700] font-semibold">Dan Brown</span>
          <span>| Category:</span>
          <span className="text-[#ffd700]">Thriller / Suspense</span>
          <span>| Rating:</span>
          <span className="flex items-center text-[#ffd700]">
            <Star size={16} className="mr-1" /> 4.5/5
          </span>
        </div>

        <p className="text-gray-300 mb-2">
          Total Books: <span className="font-semibold">100</span> &nbsp;|&nbsp;
          Available: <span className="font-semibold">42</span>
        </p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Origin is a 2017 mystery-thriller novel by American author Dan Brown.
          It is the fifth installment in the Robert Langdon series, following
          previous bestsellers like *The Da Vinci Code* and *Angels & Demons*.
        </p>

        <Button className="mt-5 w-fit bg-[#f5deb3] text-black px-4 py-2 hover:bg-[#f0d58a] text-sm md:text-base">
          <span className="mr-2">📖</span> Borrow Book Request
        </Button>
      </div>

      {/* RIGHT SIDE (IMAGE SECTION) */}
      <div className="relative flex justify-center md:justify-start">
        {/* Back (tilted) image */}
        <div className="absolute top-[10px] left-[70px] sm:left-[100px] w-[180px] sm:w-[220px] h-[300px] sm:h-[330px] opacity-70 blur-[1px] scale-[1.05]">
          <Image
            src="/DanBrownTilted.png"
            alt="Book Cover Back"
            fill
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Front image */}
        <div className="relative w-[180px] sm:w-[220px] h-[300px] sm:h-[330px] z-10">
          <Image
            src="/DanBrown.png"
            alt="Book Cover Front"
            fill
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
