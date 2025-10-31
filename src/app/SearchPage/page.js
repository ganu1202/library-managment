"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [filterGenre, setFilterGenre] = useState("");

  // Automatically reset filter to "all" when query is cleared if I add all option
  useEffect(() => {
    if (query.trim() === "") {
      setFilterGenre("");
    }
  }, [query]);

  // Filtering logic
  const filteredBooks = books.filter((book) => {
    const lowerQuery = query.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      book.genre.toLowerCase().includes(lowerQuery);

    const matchesFilter =
      filterGenre === "all" ||
      book.genre.toLowerCase().includes(filterGenre.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  const noResultCondition = query && filteredBooks.length === 0;

  return (
    <main className="min-h-screen">
      <Navbar />


      <section className="text-center py-20 px-4">
        <p className="uppercase tracking-widest text-gray-400 mb-2 text-sm">
          Discover Your Next Great Read
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Explore and Search for <br />
          <span className="text-[#EED1AC]">Any Book</span> In Our Library
        </h1>

        {/* Search Bar*/}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <div className="relative w-[390px]">
            <Search size={20} className="absolute left-3 top-4 text-[#EED1AC]" />
            <Input
              type="text"
              placeholder="Search by title or genre..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#1a1e2e] border-none text-white pl-10 w-full h-15 placeholder-gray-400"
            />
          </div>

        </div>

        <section className="px-8 py-15 md:px-30 flex justify-between items-center">
        <h2 className="text-[1.8rem] font-bold text-white">Search Results</h2>
        {/* Genre Filter Dropdown */}
          <Select value={filterGenre} onValueChange={setFilterGenre}>
            <SelectTrigger className="w-54 bg-[#1a1e2e] text-center text-gray-300 border-none">
            <SelectValue placeholder="Filter by: Department" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1e2e] text-white">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="thriller">Thriller</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
            </SelectContent>
          </Select>
      </section>

        {/* Conditional Rendering for Search Results */}
        {noResultCondition ? (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <Image
              src="/notfound.svg"
              alt="No Results"
              width={220}
              height={220}
              className="opacity-90 mb-6"
            />
            <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
            <p className="text-gray-400">Try searching for another book or genre.</p>
          </div>
        ) : (
          <section className="mt-[-80px] p-[100px]">
          
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10">
            {filteredBooks.map((book, index) => (
              <div key={index} className="text-center">
              <div className="overflow-hidden rounded-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={100}
                  height={150}
                  className="w-full"
                  layout="responsive"
                />
              </div>
            </div>
            ))}

          </div>
        </section>
        )}
      </section>
      
    </main>
  );
}
