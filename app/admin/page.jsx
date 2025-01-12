'use client'
import { Login, Validate } from '@/actions/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      const valid = async () => {
        const response = await Validate(token);
        if(response === true){
          router.replace('/admin/dashboard')
        }else{
          localStorage.removeItem('token')
        }
    }
  }
  }, [])

  async function Authentication(){
    const username = 'admin'
    const password = 'admin'

    const response = await Login(username, password)
    if(response === 404 || response === "User not found"){
      console.log("User not found")
    }
    if(response.length > 10){
      localStorage.setItem('token', response)
      console.log("Logged in")
      router.replace('/admin/dashboard')
    }
  }


  
  return (
    <div>
      Login Page
      Simple Login
    </div>
  )
}

export default page