"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { getBlogBySlug, updateBlog } from "@/actions/blogs"
import { useRouter } from "next/navigation"

const MDEditor = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false })

export default function BlogWriterForm() {
const [markdown, setMarkdown] = useState('')
const [blogId, setBlogId] = useState('')
const router = useRouter()

async function getData(){
    const blog = await getBlogBySlug('test3')
    console.log(blog)
    if(!blog){
        router.back()
    }
    setMarkdown(blog.blogContent)
    setBlogId(blog.blogID)
}


useEffect(()=>{
    getData()
}, [])

const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission here
    const res = await updateBlog(markdown, blogId)
    console.log(res)
    if(!res){
        alert("Update Failed")
        return
    }
    alert("Updated!")
    // console.log({ title, description, slug, excerpt, date, blogImage, tag, featured, trending, markdown })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className=" flex-1">
        <Label htmlFor="markdown">Blog Content</Label>
        <MDEditor className=" h-full" value={markdown} onChange={(value) => setMarkdown(value || "")} height={600} preview="live" />
      </div>
      <Button type="submit">Update Blog</Button>
    </form>
  )
}

