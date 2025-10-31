import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.formData();
    const name = body.get("name");
    const email = body.get("email");
    const password = body.get("password");
    const universityId = body.get("universityId");
    const universityFile = body.get("universityFile"); // File object
    
    // Validate fields
    if (!name || !email || !password || !universityId) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      return NextResponse.json(
        { error: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character." },
        { status: 400 }
      );
    }


    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let fileUrl=null;
    if (universityFile && universityFile.size > 0) {
      const buffer = Buffer.from(await universityFile.arrayBuffer());

      // Convert buffer to a temporary file (Cloudinary can handle base64 string too)
      const base64Data = `data:${universityFile.type};base64,${buffer.toString("base64")}`;

      const uploadResult = await cloudinary.uploader.upload(base64Data, {
        folder: "university_files",
      });

      fileUrl = uploadResult.secure_url;
    }

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        universityId,
        universityFile: fileUrl,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error.message,error.stack);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  } 
}
