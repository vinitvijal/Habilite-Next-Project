'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function Blog(title, description, author, content, tags){
    await prisma.blogs.create({
        data: {
            blogTitle: title,
            blogDescription: description,
            blogDate: new Date(), 
            blogAuthor: author,
            blogContent: content,
            // blogTags: tags
        }
    })
}
export async function UpdateBlog(id,title, description, author, content, tags){
    await prisma.blogs.update({
        where: {
           blogID: id, 
        },
        data: {
            blogTitle: title,
            blogDescription: description,
            blogDate: new Date(), 
            blogAuthor: author,
            blogContent: content,
            // blogTags: tags 
        },
    });
}