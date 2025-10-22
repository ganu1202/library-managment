"use client";

import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError("Invalid email or password");
    } else {
      router.push("/"); // or wherever you want
    }
  };

  return (
    <div className="flex min-h-screen">
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
              <p className="text-xl font-semibold mb-2 text-white">
                Welcome Back to Bookwise
              </p>
              <p className="text-sm text-gray-300 whitespace-nowrap">
                Access your resources and stay updated
              </p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="m@example.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="At least 8 characters long"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button
              onClick={handleLogin}
              className="w-full bg-[#E7C9A5] text-black"
            >
              Login
            </Button>
            <span className="text-wrap">
              Don't have an account?
              <span
                className="text-[#E7C9A5] cursor-pointer"
                onClick={() => router.push("/user-panel/register")}
              >
                {" "}
                Register here
              </span>
            </span>
          </CardFooter>
        </Card>
      </div>

      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img.png")' }}
      ></div>
    </div>
  );
}
