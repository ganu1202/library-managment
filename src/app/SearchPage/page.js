"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";  
import Image from "next/image";
import Navbar from "../components/Navbar";

const books = [
  { title: "Origin", author: "Dan Brown", genre: "Thriller / Mystery", image: "/origin.svg" },
  { title: "The Fury", author: "Alex Michaelides", genre: "Psychological Thriller", image: "/the_fury.svg" },
  { title: "The Maidens", author: "Alex Michaelides", genre: "Psychological Thriller", image: "/the_maidens.svg" },
  { title: "Gerald’s Game", author: "Stephen King", genre: "Horror Game", image: "/geralds_game.svg" },
  { title: "Don’t Turn Around", author: "Jessica Barry", genre: "Thriller / Suspense", image: "/dont_turn_around.svg" },
  { title: "Amazing Facts", author: "Jeanne Ellis", genre: "Thriller / Suspense", image: "/amazing_facts.svg" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <main className=" min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <p className="uppercase tracking-widest text-gray-400 mb-2 text-sm">
          Discover Your Next Great Read
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Explore and Search for <br />
          <span className="text-[#EED1AC]">Any Book</span> In Our Library
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <div className="relative w-[390px]">
            <Search size={20} className="absolute left-3 top-4 text-[#EED1AC]" />
            <Input
              type="text"
              placeholder="Thriller Mystery"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#1a1e2e] border-none text-white pl-10 w-full h-15 placeholder-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-8 md:px-30 mb-6 flex justify-between items-center">
  <h2 className="text-[1.8rem] font-bold text-white">Search Results</h2>
  <Select onValueChange={(value) => setDepartment(value)}>
    <SelectTrigger className="w-44 bg-[#1a1e2e] text-center text-gray-300 border-none">
      <SelectValue placeholder="Filter by: Department" />
    </SelectTrigger>
  </Select>
</section>


      {/* Popular Books Grid */}
      <section className="mt-[-30px] p-[100px]">
           
           <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10">
             {books.map((book, idx) => (
               <div key={idx} className="text-center">
                 <div className="overflow-hidden rounded-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1">
                   <Image
                     src={book.image}
                     alt={book.title}
                     width={200}
                     height={250}
                     className="w-full"
                     layout="responsive"
                   />
                 </div>
                 
               </div>
             ))}
           </div>
         </section>


    </main>
  );
}
