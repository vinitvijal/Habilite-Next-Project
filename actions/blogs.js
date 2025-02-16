'use server'
import { PrismaClient } from "@prisma/client"
import { Validate } from "./auth"
const yaml = require('js-yaml');

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

export async function getBlogBySlug(slug){
    return await prisma.blogs.findFirst({
        where: {
            blogSlug: slug
        },
        select:{
            blogContent: true,
            blogID: true
        }
    })
}

export async function updateBlog(content, blogId){
    const parseData = (str) => {
        const obj = {};
        str.trim().split("\n").forEach(line => {
            const [key, ...value] = line.split(": ");
            obj[key.trim()] = value.join(": ").trim(); // Handle multi-word values
        });
        return obj;
    };
    const parsedData = parseData(content)
    return await prisma.blogs.update({
        where: {
            blogID: blogId
        },
        data: {
            blogAuthor: parsedData.author,
            blogTitle: parsedData.title,
            blogSlug: parsedData.slug,
            blogDescription: parsedData.description,
            blogContent: content
        }
    })
}