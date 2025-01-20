'use server'
import { PrismaClient } from "@prisma/client"
import { Validate } from "./auth"

const prisma = new PrismaClient()

export async function createAppointment(name= "", email="", phone="", query= "" , date= "", time= "", type= "", status= "", remarks= ""){
    
    const res = await prisma.bookAppointment.create({
        data: {
            appointName: name,
            appointPhone: phone,
            appointQuery: query,
            allotedDate: date,
            allotedRemark: remarks,
            allotedTime: time,
            appointStatus: status,
            allotedType: type,
            appointEmail: email,
        }
    })
    return res
}


export async function createAdminAppointment(name= "", email="", date= "", time= "", type= ""){
    const res = await prisma.bookAppointment.create({
        data: {
            appointName: name,
            allotedDate: date,
            allotedTime: time,
            allotedType: type,
            appointEmail: email,
            appointQuery: "Created by Admin"
        }
    })
    return res
}

export async function getAppointments(token, page=0){
    const validation = await Validate(token);
    if(!validation){
        return "Invalid Authentication";
    }
    const response = await prisma.bookAppointment.findMany({
        take: 10,
        skip: page*10
    })
    return response
}