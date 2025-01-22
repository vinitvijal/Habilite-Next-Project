'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NewTestimonialDialog } from './testimonial-modal'
import { createTestimonial, getAdminTest } from '@/actions/testimonial'

function Page() {
      const [isNewTestimonialOpen, setIsNewTestiomonialOpen] = useState(false)
    const [tests, setTests] = useState([])


    async function getData(){
        const token = localStorage.getItem("token")
        const data = await getAdminTest(token);
        if(!data){
            alert("Error in Validation")
        }
        setTests(data)
    }


    useEffect(()=>{
        getData()
    },[])


    const handleAddNewTestimonial = async (newTestimonial) => {
        const token =  localStorage.getItem("token")
        console.log(newTestimonial)
        const response = await createTestimonial(token, newTestimonial.role, newTestimonial.name, newTestimonial.content)
        console.log(response)
        getData()
        setIsNewTestiomonialOpen(false)
        }


  return (
    <div className="container mx-auto py-10 overflow-y-auto h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <Button onClick={()=>setIsNewTestiomonialOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Testimonial
        </Button>
      </div>
      <div className=' grid grid-cols-2 gap-4'>
        {tests && tests.map((test)=>(

            <Card className=' m-auto w-full'>
            <CardHeader>
                <CardTitle>{test.TesAuthor}</CardTitle>
                <CardDescription>{test.TesOccupation}</CardDescription>
            </CardHeader>
            <CardContent>
                {test.TesContent}
            </CardContent>
            <CardFooter>
                <Button variant='destructive'>
                    Delete
                </Button>
            </CardFooter>
        </Card>
        
    ))}
        
        
      </div>
      <NewTestimonialDialog
        open={isNewTestimonialOpen}
        onOpenChange={setIsNewTestiomonialOpen}
        handleAddNewTestimonial={handleAddNewTestimonial}
        />
    </div>
  )
}

export default Page
