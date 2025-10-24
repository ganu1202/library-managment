"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BookDetail() {
  return (
    <section className="flex justify-between items-center py-[50px] px-[120px] text-white">
      {/* ---------- LEFT SIDE (INFO SECTION) ---------- */}
      <div className="max-w-[600px]">
        <h1 className="text-[3.5rem] font-bold mb-3">Origin</h1>

        <p className="text-[#bbb] mb-1.5">
          By <span className="text-[#EED1AC]">Dan Brown</span> | Category:
          <span className="text-[#EED1AC]"> Thriller / Suspense</span>
        </p>

        <p className="flex items-center gap-[6px] text-[#EED1AC] my-2">
          <Star size={16} /> 4.5/5
        </p>

        <p className="text-[#aaa] mb-3">
          Total books: <span className="text-[#EED1AC]">100</span> &nbsp; 
          Available: <span className="text-[#EED1AC]">42</span>
        </p>

        <p className="text-[#ccc] leading-relaxed mb-5">
          Origin is a 2017 mystery-thriller novel by American author Dan Brown.
          It is the fifth installment in the Robert Langdon series, following
          previous bestsellers such as The Da Vinci Code and Angels & Demons.
        </p>

        <Button className="bg-[#EED1AC] text-black font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-[2px]">
          📖 Borrow Book Request
        </Button>
      </div>

      {/* ---------- RIGHT SIDE (IMAGE SECTION) ---------- */}
      <div className="relative flex justify-center items-center">
        <div className="relative inline-block w-[250px] h-[350px]">
          {/* Blurred Background Cover */}
          <Image
            src="/img.svg"
            alt="Origin blurred"
            width={250}
            height={350}
            className="absolute top-0 left-0 rotate-[9.62deg] scale-[1.03] blur-[6px] brightness-[80%] opacity-50 z-[1] rounded-[5px]"
          />

          {/* Main Front Cover */}
          <Image
            src="/img.svg"
            alt="Origin main cover"
            width={250}
            height={350}
            className="relative z-[2] rounded-[10px] left-[-110px] top-[-20px] shadow-[0_0_0_rgba(0,0,0,0.6)] transition-transform duration-400 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
