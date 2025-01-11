'use server'
import { PrismaClient } from "@prisma/client"
import  crypto  from "crypto"

const prisma = new PrismaClient()

export async function Login(username, password){
    if (!username || !password){
        return 404
    }
    const res = await prisma.admin.findFirst({
        where:{
            userName: username,
            password: password
        }
    })
    if(!res){
        return 'User not found'
    }
    const token = crypto.randomBytes(20).toString('hex')
    console.log(token)
    await prisma.admin.update({
        data: {
            token, 
            lastLogin: new Date()
        },where: {
            userId: res.userId
        }
    })
    return token
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