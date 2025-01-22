'use server'
import { PrismaClient } from "@prisma/client"
import { Validate } from "./auth"

const prisma = new PrismaClient()

export async function createTestimonial(token, role, author, content){
    const res = await Validate(token);
    if(!res){
        return "Error"
    }
    await prisma.testimonials.create({
        data: {
            TesAuthor: author,
            TesContent: content,
            TesOccupation: role
        }
    })
    return "Success"
}

export async function getAdminTest(token){
    const res = await Validate(token);
    if(!res){
        return 
    }

    return await prisma.testimonials.findMany();
}