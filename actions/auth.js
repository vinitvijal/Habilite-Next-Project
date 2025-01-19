'use server'
import { PrismaClient } from "@prisma/client"
import  crypto  from "crypto"

const prisma = new PrismaClient()

export async function Login(username, password){
    if (!username || !password){
        return {data: "Email and Password are required", status: 404}
    }
    const res = await prisma.admin.findFirst({
        where:{
            userName: username,
            password: password
        }
    })
    if(!res){
        return {data: 'User not found', status: 404}
    }
    const token = crypto.randomBytes(20).toString('hex')

    await prisma.admin.update({
        data: {
            token, 
            lastLogin: new Date()
        },where: {
            userId: res.userId
        }
    })
    return {data: token, status: 200}
}

export async function Validate(token){
    const res = await prisma.admin.findFirst({
        where: {
            userName: 'admin'
        }
    })
    if(res.token === token){
        return true
    }
    return false
}