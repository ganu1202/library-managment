"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  Book,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "../components/Navbar";

const borrowedBooks = [
  {
    id: 1,
    title: "The Origin - By Dan Brown",
    genre: "Thriller / Mystery",
    dateBorrowed: "Dec 31",
    daysLeft: "04 days left to due",
    status: "active",
    image: "/origin1.svg",
  },
  {
    id: 2,
    title: "The Fury - By Alex Michaelides",
    genre: "Thriller / Mystery",
    dateBorrowed: "Dec 24",
    daysLeft: "Overdue Return",
    status: "overdue",
    image: "/fury.svg",
  },
  {
    id: 3,
    title: "The Huge Book of Amazing Facts",
    genre: "Trivia / Knowledge",
    dateBorrowed: "Jan 03",
    daysLeft: "04 days left to due",
    status: "active",
    image: "/theorigin.svg",
  },
  {
    id: 4,
    title: "Gerald’s Game - By Stephen King",
    genre: "Thriller / Mystery",
    dateBorrowed: "Dec 26",
    daysLeft: "Returned on 5th Jan",
    status: "returned",
    image: "/gerald's.svg",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center px-[120px] py-[50px] gap-[40px]">
        
        {/* LEFT COLUMN: PROFILE CARD */}
        <div className="bg-[#232839] rounded-3xl w-[620px] h-[800px] p-6 relative shadow-lg">
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-[#464F6F] w-[60px] h-[75px] rounded-b-3xl"></div>
          <div className="flex py-20 flex-col items-left text-left">
            <div className="flex items-center gap-5">
  {/* Profile Image */}
  <Image
    src="/image.svg"
    alt="Profile"
    width={90}
    height={90}
    className="rounded-full object-cover"
  />

  {/* Name and Info */}
  <div className="flex flex-col">
    <div className="flex items-center gap-2">
      <BadgeCheck className="text-[#FFE1BD]" size={18} />
      <p className="text-sm text-gray-400 relative">Verified Student</p>
    </div>
    <h2 className="text-xl font-semibold mt-1">Adrian</h2>
    <p className="text-gray-400 text-sm">contact@jsmastery.pro</p>
  </div>
</div>


            <div className="my-4 bg-gray-600" />
            <div className="text-left w-full">
              <p className="text-gray-400 text-sm">University</p>
              <p className="text-[16px] font-semibold mb-2">JS Mastery Pro</p>
              <p className="text-gray-400 text-sm">Student ID</p>
              <p className="text-[16px] font-semibold mb-4">234567856</p>
            </div>

            <div className="rounded-2xl overflow-hidden mt-4">
              <Image
                src="/image 12.svg"
                alt="Student ID Card"
                width={660}
                height={420}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

     {/* RIGHT COLUMN: BORROWED BOOKS */}
        <div className="flex-1">
          <h2 className="px-65 text-[22px] font-semibold mb-6">Borrowed books</h2>

          <div className="px-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[20px] justify-end pr-[0px]">

            {borrowedBooks.map((book) => (
              <Card
  key={book.id}
  className={` bg-[#1c2333] border-0 rounded-2xl shadow-lg transition hover:scale-[1.02] w-[260px] h-[400px] mx-auto relative gap-[20px]  ${
    book.status === "overdue"
      ? "border border-red-500"
      : "border-transparent"
  }`}
>

                <CardContent>
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-right">
                      <Image
  src={book.image}
  alt={book.title}
  width={300}
  height={520}
  className="rounded-lg mx-auto mt-2 mb-2 object-cover"
/>


                    </div>
                    <h3 className="text-[16px] text-white font-semibold leading-tight mb-1 mt-4">
                      {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{book.genre}</p>

                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <BookOpen  size={15}  /> Borrowed on {book.dateBorrowed}
                    </div>

                    <div
                      className={`flex items-center gap-1 text-sm mt-2 ${
                        book.status === "overdue"
                          ? "text-red-400"
                          : book.status === "returned"
                          ? "text-green-400"
                          : "text-gray-400"
                      }`}
                    >
                      {book.status === "overdue" ? (
                        <AlertCircle size={15} />
                      ) : book.status === "returned" ? (
                        <CheckCircle2 size={15} />
                      ) : (
                        <Calendar className="text-yellow-500" size={15} />
                      )}
                      <span>{book.daysLeft}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
