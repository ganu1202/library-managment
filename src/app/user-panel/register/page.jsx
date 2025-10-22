"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { BookOpen, Upload } from "lucide-react";
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
import { useRouter } from "next/navigation";

// ---- API call function ----
const registerUser = async (formData) => {
  // Convert FormData object to JSON
  const body = new FormData();
  body.append("name", formData.name);
  body.append("email", formData.email);
  body.append("universityId", formData.universityId);
  body.append("password", formData.password);
  if (formData.universityFile)
    body.append("universityFile", formData.universityFile);

  const res = await fetch("/api/auth/register", {
    method: "POST",
    body,
  });

  const data = await res.json(); // ✅ Safe now
  if (!res.ok) throw new Error(data.error || "Registration failed");
  console.log(res);
  return data;
};

export default function SignUpPage() {
  const router = useRouter();
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    universityId: "",
    password: "",
    universityFile: null,
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => alert("✅ Registered Successfully!"),
    onError: (err) => alert("❌ " + err.message),
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || "");
    setFormData((prev) => ({ ...prev, universityFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-[#12141D]">
        <Card className="w-full max-w-sm bg-[#12151F] text-white border-0 shadow-lg">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <BookOpen size={18} />
                <span>Bookwise</span>
              </div>
            </CardTitle>
            <CardDescription>
              <p className="text-xl font-semibold mb-2 text-white">
                Create Your Library Account
              </p>
              <p className="text-sm text-gray-300">
                Please complete all fields and upload a valid university ID
              </p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" required onChange={handleChange} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="At least 8 characters long"
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="universityFile">
                  Upload University ID Card
                </Label>
                <input
                  id="universityFile"
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="universityFile"
                  className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-600 rounded-lg py-3 cursor-pointer hover:border-[#E7C9A5] transition"
                >
                  <Upload className="text-[#E7C9A5]" size={18} />
                  <span className="text-sm text-gray-300">
                    {fileName || "Upload a file"}
                  </span>
                </label>
              </div>

              {mutation.isPending && (
                <p className="text-center text-sm text-gray-400">
                  Registering...
                </p>
              )}
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={mutation.isPending}
              className="w-full bg-[#E7C9A5] text-black"
            >
              {mutation.isPending ? "Signing Up..." : "Sign Up"}
            </Button>
            <span className="text-wrap">
              Have an account already?{" "}
              <span
                className="text-[#E7C9A5] cursor-pointer"
                onClick={() => router.push("/user-panel/login")}
              >
                Login
              </span>
            </span>
          </CardFooter>
        </Card>
      </div>

      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img (1).png")' }}
      ></div>
    </div>
  );
}
