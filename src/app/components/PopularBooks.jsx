"use client";
import Image from "next/image";

const books = [
  { title: "Origin", image: "/Harry Potter.png" },
  { title: "The Fury", image: "/The fury.png" },
  { title: "The Maidens", image: "/The Maidens.png" },
  { title: "Gerald’s Game", image: "/Stephen King.png" },
  { title: "Don’t Turn Around", image: "/The Turn around.png" },
  { title: "Amazing Facts", image: "/Amazing facts.png" },
];

export default function PopularBooks() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-[#dbeafe]">
        Popular Books
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-10">
        {books.map((book, idx) => (
          <div key={idx} className="text-center">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={250}
                className="w-full object-cover"
              />
            </div>
            <p className="mt-3 text-gray-300 text-sm">{book.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
