import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
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

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side: Login Form */}
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
                Welcome Back to the Bookwise
              </p>
              <p className="text-sm text-gray-300 whitespace-nowrap">
                Access the vast collection of resouces, and stay updated
              </p>
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
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
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Atleast 8 characters long"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2 ">
            <Button type="submit" className="w-full bg-[#E7C9A5] text-black">
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
            <span className="text-wrap">
              Don't have an account already?
              <span className="text-[#E7C9A5]"> Register here</span>
            </span>
          </CardFooter>
        </Card>
      </div>

      {/* Right side: Image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img.png")' }}
      ></div>
    </div>
  );
}
