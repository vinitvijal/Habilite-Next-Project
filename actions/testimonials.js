'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function Testimonial(author, occupation, content){
    await prisma.testimonials.create({
        data: {
            TesAuthor: author,
            TesOccupation: occupation,
            TesContent: content,
            TesUpdate: new Date()
        }
    })
}
export async function UpdateTes(id, author, occupation, content){
    await prisma.testimonials.update({
        where: {
            TesID: id, 
        },
        data: {
            TesAuthor: author,
            TesOccupation: occupation,
            TesContent: content,
            TesUpdate: new Date() 
        },
    });
}