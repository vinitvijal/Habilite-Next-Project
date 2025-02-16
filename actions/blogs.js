'use server'
import { PrismaClient } from "@prisma/client"
import { Validate } from "./auth"

const prisma = new PrismaClient()

export async function getBlogs(token){
    const res = await Validate(token);
    if(!res){
        return "Error"
    }

    return await prisma.blogs.findMany()
}