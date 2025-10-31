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
import Navbar from "../../components/Navbar";

const books = [
  {
    title: "Origin",
    author: "Dan Brown",
    genre: "Thriller / Mystery",
    image: "/Dan.png",
  },
  {
    title: "The Fury",
    author: "Alex Michaelides",
    genre: "Psychological Thriller",
    image: "/The fury.png",
  },
  {
    title: "The Maidens",
    author: "Alex Michaelides",
    genre: "Psychological Thriller",
    image: "/The Maidens.png",
  },
  {
    title: "Gerald’s Game",
    author: "Stephen King",
    genre: "Horror Game",
    image: "/Stephen King.png",
  },
  {
    title: "Don’t Turn Around",
    author: "Jessica Barry",
    genre: "Thriller / Suspense",
    image: "/TA.png",
  },
  {
    title: "Amazing Facts",
    author: "Jeanne Ellis",
    genre: "Thriller / Suspense",
    image: "/Amazing facts.png",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  useEffect(() => {
    if (query.trim() === "") setFilterGenre("");
  }, [query]);

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
    <main className="min-h-screen bg-[#111827] text-white px-4 sm:px-6 md:px-10 py-6">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-gray-400 mb-3 text-sm">
          Discover Your Next Great Read
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Explore and Search for <br />
          <span className="text-[#EED1AC]">Any Book</span> In Our Library
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <div className="relative w-full sm:w-[400px]">
            <Search
              size={20}
              className="absolute left-3 top-4 text-[#EED1AC]"
            />
            <Input
              type="text"
              placeholder="Search by title, author, or genre..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#1a1e2e] border border-gray-700 rounded-lg text-white pl-10 w-full h-[45px] placeholder-gray-400 focus:ring-2 focus:ring-[#EED1AC] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Search Results Header + Filter */}
      <section className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-10">
        <h2 className="text-2xl font-semibold text-[#dbeafe]">
          Search Results
        </h2>

        <Select value={filterGenre} onValueChange={setFilterGenre}>
          <SelectTrigger className="w-[200px] bg-[#1a1e2e] text-gray-300 border border-gray-700 rounded-lg">
            <SelectValue placeholder="Filter by: Genre" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1e2e] text-white border border-gray-700 rounded-md">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="thriller">Thriller</SelectItem>
            <SelectItem value="horror">Horror</SelectItem>
            <SelectItem value="mystery">Mystery</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Results Grid or Empty State */}
      <section className="max-w-6xl mx-auto mt-12">
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
            <p className="text-gray-400">
              Try searching for another book or genre.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-10 place-items-center">
            {filteredBooks.map((book, index) => (
              <div
                key={index}
                className="text-center bg-[#1a1e2e] rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.4)] hover:scale-[1.03] transition-transform p-4"
              >
                <div className="overflow-hidden rounded-lg mb-3">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={180}
                    height={240}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#EED1AC] mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{book.author}</p>
                <p className="text-xs text-gray-500">{book.genre}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
