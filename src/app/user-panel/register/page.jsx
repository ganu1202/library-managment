"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, Upload } from "lucide-react"; // Added Upload icon
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { email } from "zod";

export default function SignUpPage() {
  const [fileName, setFileName] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Left side: Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-[#12141D]">
        <Card className="w-full max-w-sm bg-[#12151F] text-white border-0 border-[#12151F] shadow-lg">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <BookOpen size={18} />
                <span>Bookwise</span>
              </div>
            </CardTitle>
            <CardDescription>
              <p className="text-xl font-semibold mb-2 text-white whitespace-nowrap">
                Create Your Library Account
              </p>
              <p className="text-sm text-gray-300">
                Please complete all fields and upload a valid university ID to
                gain access to the library
              </p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" required />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="universityId">University ID Number</Label>
                  <Input
                    id="universityId"
                    type="text"
                    required
                    placeholder="e.g. 394365762"
                    className="text-white placeholder-gray-400"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="At least 8 characters long"
                  />
                </div>

                {/* 🆕 Custom File Upload */}
                <div className="grid gap-2">
                  <Label htmlFor="universityIdFile">
                    Upload University ID Card
                  </Label>

                  {/* Hidden input */}
                  <input
                    id="universityIdFile"
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                  />

                  {/* Custom clickable upload area */}
                  <label
                    htmlFor="universityIdFile"
                    className="flex  items-center justify-center gap-2 border-2 border-dashed border-gray-600 rounded-lg py-3 cursor-pointer hover:border-[#E7C9A5] transition"
                  >
                    <Upload className="text-[#E7C9A5]" size={18} />
                    <span className="text-sm text-gray-300">
                      {fileName || "Upload a file"}
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full bg-[#E7C9A5] text-black">
              Sign Up
            </Button>
            <span className="text-wrap">
              Have an account already?
              <span className="text-[#E7C9A5]"> Login</span>
            </span>
          </CardFooter>
        </Card>
      </div>

      {/* Right side: Image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img (1).png")' }}
      ></div>
    </div>
  );
}

/*
next-auth → handles authentication/session
bcrypt → hashes passwords securely
prisma + @prisma/client → manage your database (e.g., PostgreSQL, MySQL, or SQLite)

*/
