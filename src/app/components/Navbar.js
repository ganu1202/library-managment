"use client";

import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-[50px] px-[120px] text-white bg-transparent">
    
      <div className="flex items-center gap-[10px]">
        <Image
          src="/logo.svg"
          alt="BookWise Logo"
          width={40}
          height={32}
          className="font-bold text-[1.8rem]"
        />
        <span className="text-[1.3rem] font-bold">BookWise</span>
      </div>

  
      <div className="flex items-center gap-[52px]">
  
        <div className="flex items-center gap-[25px] text-[#ccc]">
          <Link
            href="/"
            className="text-white text-[16px] font-normal hover:text-[#f6c945] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/SearchPage"
            className="text-white text-[16px] font-normal hover:text-[#f6c945] transition-colors duration-200"
          >
            Search
          </Link>
        </div>


        <div className="flex items-center gap-[16px] text-[#88bfec]">
          <Avatar>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1c1c1c] text-white font-semibold">
              AH
            </div>
          </Avatar>
          <span>Adrian</span>
          <Image
            src="/frame.svg"
            alt="Logout"
            width={16}
            height={16}
            className="cursor-pointer text-[#999] hover:text-white transition-colors duration-200"
          />
        </div>
      </div>
    </nav>
  );
}
