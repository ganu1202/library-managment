"use client";
import Navbar from "./components/Navbar";
import BookDetail from "./components/BookDetail";
import PopularBooks from "./components/PopularBooks";

export default function Page() {
  return (
    <div className="min-h-screen w-full max-w-[150rem] mx-auto bg-[#111827] text-white px-4 sm:px-6 lg:px-8 p-4 sm:p-6 md:p-10">
      {/* Header */}
      <Navbar />

      {/* Content Section */}
      <div className="grid gap-16">
        <BookDetail />
        <PopularBooks />
      </div>
    </div>
  );
}
