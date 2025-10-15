import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
    try{
        const body=await req.json()
        const {name,email,password, universityId, universityFile}=body;

        if(!name || !email || !password || !!universityId){
            return Response.json(
                {error:"All required fields must be filled"},
                {status: 400}
            );
        }

        const existingUser= await prisma.user.findUnique({
            where: {email},
        })

        if(existingUser){
            return Response.json(
                {error: "User already exists with this email"},
                {status:400}
            );
        }

        const hashPassword= await bcrypt.hash(password,10)

        const newUser= await prisma.user.create({
            data:{
                name,
                email,
                password:hashPassword,
                universityId,
                universityFile:universityFile|| null
            },
        });

        return Response.json(
            {message: "User registered successfully", user:newUser},
            {status:201}
        );

    }catch(error){
        console.error("Error during registration:", error);
        return Response.json(
            {error:"Internal server error"},
            {status: 500}
        );
    }finally{
        await prisma.$disconnect();
    }
}   