"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Phone, Mail, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { createAppointment } from "@/actions/appointment"

export default function AppointmentButton({ className }) {
  const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [query, setQuery] = useState('')

      const [loading, setLoading] = useState(false);  
      const [submissionMessage, setSubmissionMessage] = useState('');
      const [isSuccess, setIsSuccess] = useState(false);

    const onChangePhone=(e)=>{
        const num=e.target.value;
        if(/^\d*$/.test(num) && num.length <= 10)
          setPhone(num);
      }


       async function handleSubmit(){
          if(!name || !email || !phone || !query) return alert('Please fill all the fields')
      
          
          // let response = await createAppointment(name, email, phone, query)
          // console.log(response)
          setLoading(true);  
          setSubmissionMessage(''); 
          try {
            const response = await createAppointment(name, email, phone, query);
            console.log(response)
            alert('Appointment created successfully!'); 
            setIsSuccess(true)
          } catch (error) {
            alert('Failed to create appointment. Please try again.');
            setIsSuccess(false)
          } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setPhone('');
            setQuery('');
            setOpen(false)
            console.log(submissionMessage)
          }
        }

  return (
    <div className={cn("flex justify-center", className)}>
      <Button onClick={() => setOpen(true)} className='px-3 py-2  md:flex select-none rounded-md border-[0.5px] border-first border-solid bg-transparent text-first hover:text-white hover:bg-first text-md duration-200 md:text-sm lg:text-base'>Book An Appointment</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Book An Appointment</DialogTitle>
          </DialogHeader>
          <div  className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </Label>
              <Input id="name"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Full Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input id="phone" value={phone} onChange={onChangePhone} type="tel" placeholder="Enter Your Phone Number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email ID
              </Label>
              <Input id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Enter Your Email Address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="query" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Query
              </Label>
              <Textarea id="query"  value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Write Your Query" className="min-h-[100px]" required />
            </div>
            <div className="flex gap-2 pt-4">
              <Button type="submit" className="flex-1" onClick={handleSubmit}>
                Submit
              </Button>
              <Button type="button" variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

