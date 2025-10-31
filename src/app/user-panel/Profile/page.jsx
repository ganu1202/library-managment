"use client";
import Image from "next/image";
import {
  BadgeCheck,
  Calendar,
  AlertCircle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "../../components/Navbar";

const borrowedBooks = [
  {
    id: 1,
    title: "The Origin - By Dan Brown",
    genre: "Thriller / Mystery",
    dateBorrowed: "Dec 31",
    daysLeft: "04 days left to due",
    status: "active",
    image: "/Dan.png",
  },
  {
    id: 2,
    title: "The Fury - By Alex Michaelides",
    genre: "Thriller / Mystery",
    dateBorrowed: "Dec 24",
    daysLeft: "Overdue Return",
    status: "overdue",
    image: "/The fury.png",
  },
  {
    id: 3,
    title: "The Huge Book of Amazing Facts",
    genre: "Trivia / Knowledge",
    dateBorrowed: "Jan 03",
    daysLeft: "04 days left to due",
    status: "active",
    image: "/Amazing facts.png",
  },
  {
    id: 4,
    title: "Gerald’s Game - By Stephen King",
    genre: "Thriller / Mystery",
    dateBorrowed: "Dec 26",
    daysLeft: "Returned on 5th Jan",
    status: "returned",
    image: "/Stephen King.png",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#0f1425] text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col lg:flex-row gap-12">
        {/* LEFT — Profile Section */}
        <div className="bg-[#1c2333] rounded-3xl p-8 shadow-lg w-full lg:max-w-[380px] relative">
          <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 bg-[#464F6F] w-[60px] h-[75px] rounded-b-3xl"></div>

          {/* Profile Info */}
          <div className="flex flex-col items-center text-center mt-10">
            <Image
              src="/image.svg"
              alt="Profile"
              width={110}
              height={110}
              className="rounded-full mb-4"
            />
            <div className="flex items-center justify-center gap-2">
              <BadgeCheck className="text-[#FFE1BD]" size={18} />
              <span className="text-sm text-gray-400">Verified Student</span>
            </div>
            <h2 className="text-2xl font-semibold mt-1">Adrian</h2>
            <p className="text-gray-400 text-sm">contact@jsmastery.pro</p>
          </div>

          <div className="mt-6 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400 text-sm mb-1">University</p>
            <p className="text-[16px] font-semibold mb-3">JS Mastery Pro</p>
            <p className="text-gray-400 text-sm mb-1">Student ID</p>
            <p className="text-[16px] font-semibold mb-5">234567856</p>
          </div>

          <div className="rounded-2xl overflow-hidden mt-6 border border-gray-700">
            <Image
              src="/Profile.png"
              alt="Student ID Card"
              width={380}
              height={230}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT — Borrowed Books */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-8 text-[#EED1AC]">
            Borrowed Books
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {borrowedBooks.map((book) => (
              <Card
                key={book.id}
                className={`bg-[#1a1e2e] border-0 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform ${
                  book.status === "overdue" ? "border border-red-500" : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={180}
                        height={260}
                        className="rounded-lg mt-2 mb-3 object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-1">
                      {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{book.genre}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <BookOpen size={15} /> Borrowed on {book.dateBorrowed}
                    </div>

                    <div
                      className={`flex items-center gap-2 text-sm mt-2 ${
                        book.status === "overdue"
                          ? "text-red-400"
                          : book.status === "returned"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {book.status === "overdue" ? (
                        <AlertCircle size={15} />
                      ) : book.status === "returned" ? (
                        <CheckCircle2 size={15} />
                      ) : (
                        <Calendar size={15} />
                      )}
                      <span>{book.daysLeft}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
