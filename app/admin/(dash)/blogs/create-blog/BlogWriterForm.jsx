"use client"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { createBlog } from "@/actions/blogs"
import { useRouter } from "next/navigation"

const MDEditor = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false })

export default function BlogWriterForm() {
    const router = useRouter()
const [markdown, setMarkdown] = useState(`---
    id: 1
    title: Which is the Best Bariatric Surgery
    description: Bariatric surgery is a transformative and life altering procedure meant for people suffering from obesity and obesity related health problems. 
    slug: bariatric-1
    excerpt: Weight Loss Surgery is a life-changing procedure that can help someone
    date: March 14, 2024
    author: Dr. Kapil Agarwal
    authorImage: /doctor.webp
    blogImage: /weightloss.jpg
    tag: Bariatric Surgery
    featured: True
    trending: True
---
`)

const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await  createBlog(markdown)
    if(!res){
        alert("Blog Creation is Failed, Please Save Your Data, Refresh the Page and Try Again")
        return
    }
    alert("Your Blog is Created")
    router.replace('/admin/blogs')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className=" flex-1">
        <Label htmlFor="markdown">Blog Content</Label>
        <MDEditor className=" h-full" value={markdown} onChange={(value) => setMarkdown(value || "")} height={600} preview="live" />
      </div>
      <Button type="submit">Create Blog Post</Button>
    </form>
  )
}

