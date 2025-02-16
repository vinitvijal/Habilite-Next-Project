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
    description: Bariatric surgery is a transformative and life altering procedure meant for people suffering from obesity and obesity related health problems. However, one of the critical considerations for anyone is the high cost of bariatric surgery. Cost of weight loss surgery is one of the key factors for majority of the patients undergoing bariatric surgery. In this article, Dr. Kapil Agrawal, one of the best bariatric surgeon in Delhi describes about various factors influencing the bariatric surgery cost in Delhi, India.
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
      {/* <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      
      
      <div className=" flex w-full gap-5">
      <div className=" w-full">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
      </div>
      <div className=" w-full">
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      </div>
      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="blogImage">Blog Image URL</Label>
        <Input id="blogImage" value={blogImage} onChange={(e) => setBlogImage(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="tag">Tag</Label>
        <Input id="tag" value={tag} onChange={(e) => setTag(e.target.value)} required />
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="featured" checked={featured} onCheckedChange={setFeatured} />
        <Label htmlFor="featured">Featured</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="trending" checked={trending} onCheckedChange={setTrending} />
        <Label htmlFor="trending">Trending</Label>
      </div> */}
      <div className=" flex-1">
        <Label htmlFor="markdown">Blog Content</Label>
        <MDEditor className=" h-full" value={markdown} onChange={(value) => setMarkdown(value || "")} height={600} preview="live" />
      </div>
      <Button type="submit">Save Blog Post</Button>
    </form>
  )
}

