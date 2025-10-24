"use client";

import Image from "next/image";

const books = [
  { title: "Origin", author: "Dan Brown", genre: "Thriller / Mystery", image: "/origin.svg" },
  { title: "The Fury", author: "Alex Michaelides", genre: "Psychological Thriller", image: "/the_fury.svg" },
  { title: "The Maidens", author: "Alex Michaelides", genre: "Psychological Thriller", image: "/the_maidens.svg" },
  { title: "Gerald’s Game", author: "Stephen King", genre: "Horror Game", image: "/geralds_game.svg" },
  { title: "Don’t Turn Around", author: "Jessica Barry", genre: "Thriller / Suspense", image: "/dont_turn_around.svg" },
  { title: "Amazing Facts", author: "Jeanne Ellis", genre: "Thriller / Suspense", image: "/amazing_facts.svg" },
];

export default function PopularBooks() {
  return (
    <section className="mt-[-30px] p-[100px]">
      <h2 className="mb-8 text-[1.8rem] font-bold text-white px-[20px]">Popular Books</h2>

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
  );
}
