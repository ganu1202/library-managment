"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, CircleUser, LogOut, Star } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BookDetailsPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const userName = session?.user?.name || "User";
  // console.log("session:", session);
  // console.log(session?.user?.name);
  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/user-panel/login");
  };

  const book = {
    title: "Origin",
    author: "Dan Brown",
    category: "Thriller / Suspense",
    rating: 4.5,
    totalBooks: 100,
    availableBooks: 42,
    videoUrl: "/videos/origin.mp4",
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white p-4 sm:p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <BookOpen color="#ffffff" strokeWidth={3} />
          <h1 className="text-2xl font-bold text-white">BookWise</h1>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 mt-4 sm:mt-0 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6 text-gray-300 font-medium">
            <Link
              href="/home"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/search"
              className="hover:text-white transition-colors duration-200"
            >
              Search
            </Link>
          </div>

          {/* User info + logout */}
          <div className="flex items-center gap-2 pl-1">
            <CircleUser />
            <span className="text-gray-300 font-medium">
              {userName.split(" ")[0]}
            </span>
            <LogOut
              className="ml-2 cursor-pointer text-red-500 hover:text-red-600 transition-colors"
              size={22}
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Left Column - Book Info */}
          <div className="flex flex-col justify-center w-full md:max-w-[500px]">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              {book.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-400 mb-3">
              <span>By</span>
              <span className="text-[#ffd700] font-semibold">
                {book.author}
              </span>
              <span>| Category:</span>
              <span className="text-[#ffd700]">{book.category}</span>
              <span>| Rating:</span>
              <span className="flex items-center text-[#ffd700]">
                <Star size={16} className="mr-1" /> {book.rating}/5
              </span>
            </div>

            <p className="text-gray-300 mb-2">
              Total Books:{" "}
              <span className="font-semibold">{book.totalBooks}</span>{" "}
              &nbsp;|&nbsp; Available:{" "}
              <span className="font-semibold">{book.availableBooks}</span>
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Origin is a 2017 mystery-thriller novel by American author Dan
              Brown. It is the fifth installment in the Robert Langdon series,
              following previous bestsellers like *The Da Vinci Code* and
              *Angels & Demons*.
            </p>

            <Button className="mt-5 w-fit bg-[#f5deb3] text-black px-4 py-2 hover:bg-[#f0d58a] text-sm md:text-base">
              <BookOpen className="fill-black mr-2" />
              <span>BORROW BOOK REQUEST</span>
            </Button>
          </div>

          {/* Right Column - Book Images */}
          <div className="relative h-[300px] sm:h-[330px] flex justify-center md:justify-start">
            <div className="relative w-[180px] sm:w-[220px] h-[300px] sm:h-[330px] z-10">
              <Image
                src="/book.png"
                alt="Book Cover Top"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="absolute top-[10px] sm:top-[15px] left-[60px] sm:left-[100px] w-[180px] sm:w-[220px] h-[300px] sm:h-[330px] opacity-70 blur-[1px] scale-[1.05]">
              <Image
                src="/book_tilted.png"
                alt="Book Cover Bottom"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Video + Summary + Similar Books Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-start">
          {/* Left Column - Video + Summary */}
          <div className="w-full max-w-[500px] mx-auto md:mx-0">
            {/* Video Section */}
            <h2 className="text-2xl font-semibold mb-4">Video</h2>
            <div className="rounded-xl overflow-hidden bg-black w-full h-[220px] sm:h-[250px] shadow-lg">
              <video
                src={book.videoUrl}
                controls
                className="w-full h-full object-cover"
              />
            </div>

            {/* Summary Section */}
            <div className="mt-8 p-5 rounded-xl shadow-lg bg-[#111827]">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                People in Glass Houses by Jayne Castle (a pseudonym for Jayne
                Ann Krentz) is a science fiction romance set in a future world
                where people with psychic abilities live in harmony with
                advanced technology. The story follows the main characters,
                Harriet and Sam, who are drawn together under unusual
                circumstances. {"\n\n"}Harriet, a talented psychic, works for a
                company that offers psychic services in a futuristic society.
                When she finds herself tangled in a dangerous situation
                involving a mysterious conspiracy, she enlists the help of Sam,
                a former investigator with a dark past. As they uncover the
                secrets surrounding a glass house—a mysterious structure tied to
                their investigation—they must navigate their growing attraction
                while facing hidden dangers. {"\n\n"}The novel combines elements
                of mystery, suspense, and romance, with a focus on psychic
                abilities, futuristic technology, and the complexities of
                relationships. The title, "People in Glass Houses," symbolizes
                the fragile nature of the world the characters inhabit and the
                vulnerabilities they face in their personal and professional
                lives.
              </p>
            </div>
          </div>

          {/* Right Column - Similar Books */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#dbeafe]">
              More similar books
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
              {[
                { title: "The Fury", img: "/The Fury.png" },
                { title: "The Maidens", img: "/The Maidens.png" },
                { title: "Don't Turn Around", img: "/The Turn around.png" },
                { title: "Gerald’s Game", img: "/Stephen king.png" },
                { title: "Amazing Facts", img: "/Amazing facts.png" },
                { title: "Harry Potter", img: "/Harry Potter.png" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="relative w-[100px] sm:w-[110px] h-[140px] sm:h-[160px] mx-auto hover:scale-105 transition-transform"
                >
                  <Image
                    src={b.img}
                    alt={b.title}
                    fill
                    className="rounded-md shadow-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
