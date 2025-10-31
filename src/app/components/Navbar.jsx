"use client";
import Link from "next/link";
import { BookOpen, LogOut, CircleUser } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const userName = session?.user?.name || "User";

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/user-panel/login");
  };

  return (
    <nav className="relative w-full bg-[#111827] px-8 py-4 flex flex-wrap justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <BookOpen color="#ffffff" strokeWidth={3} />
        <h1 className="text-2xl font-bold text-white">BookWise</h1>
      </div>

      {/* Links + User Info */}
      <div className="flex items-center gap-4 sm:gap-6 mt-4 sm:mt-0 flex-wrap">
        <div className="flex items-center gap-5 text-gray-300 font-medium">
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
    </nav>
  );
}
