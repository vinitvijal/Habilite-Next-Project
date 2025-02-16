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

export async function createBlog( content){
    console.log(content)
    await prisma.blogs.update({
        where: {
            blogID: 'cm77grl3w0000ujzkeq5lgo9h'
        },
        data: {
            blogContent: content
        }
    })

    console.log('done')
}