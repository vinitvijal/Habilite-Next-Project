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
const [markdown, setMarkdown] = useState(``)

const [blog, setBlog] = useState({
    id: (Math.random()*1000000).toFixed(0),
    title: "Title of the Blog",
    description: "Description of the Blog",
    slug: crypto.randomUUID().slice(0, 8),
    excerpt: "Weight Loss Surgery is a life-changing procedure that can help someone",
    date: new Date().toISOString().slice(0, 10),
    author: "Dr. Kapil Agarwal",
    authorImage: "/doctor.webp",
    blogImage: "/weightloss.jpg",
    tag: "",
    featured: false,
    trending: true
})


const handleSubmit = async (e) => {
    e.preventDefault()
    
    const blogString = `---
    id: ${blog.id}
    title: ${blog.title}
    description: ${blog.description}
    slug: ${blog.slug}
    excerpt: ${blog.excerpt}
    date: ${blog.date}
    author: ${blog.author}
    authorImage: ${blog.authorImage}
    blogImage: ${blog.blogImage}
    tag: ${blog.tag}
    featured: ${blog.featured}
    trending: ${blog.trending}
---`;

    console.log(blogString + '\n'+ markdown);

    const res = await createBlog(blogString + '\n'+ markdown)
    if(!res){
        alert("Blog Creation is Failed, Please Save Your Data, Refresh the Page and Try Again")
        return
    }


    alert("Your Blog is Created")
    // router.replace('/admin/blogs')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className=" flex-1">
        <div>
          <div className="border p-4 rounded-md shadow-md">
            <div className="mb-4">
              <Label htmlFor="title">Title</Label>
              <input
                type="text"
                id="title"
                value={blog.title}
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                value={blog.description}
                onChange={(e) => setBlog({ ...blog, description: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="slug">Slug</Label>
              <input
                type="text"
                id="slug"
                value={blog.slug}
                onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="excerpt">Excerpt</Label>
              <textarea
                id="excerpt"
                value={blog.excerpt}
                onChange={(e) => setBlog({ ...blog, excerpt: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <input
                type="date"
                id="date"
                value={blog.date}
                onChange={(e) => setBlog({ ...blog, date: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="author">Author</Label>
              <input
                type="text"
                id="author"
                value={blog.author}
                onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="authorImage">Author Image URL</Label>
              <input
                type="text"
                id="authorImage"
                value={blog.authorImage}
                onChange={(e) => setBlog({ ...blog, authorImage: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="blogImage">Blog Image URL</Label>
              <input
                type="text"
                id="blogImage"
                value={blog.blogImage}
                onChange={(e) => setBlog({ ...blog, blogImage: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="tag">Tag</Label>
              <input
                type="text"
                id="tag"
                value={blog.tag}
                onChange={(e) => setBlog({ ...blog, tag: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="featured">Featured</Label>
              <input
                type="checkbox"
                id="featured"
                checked={blog.featured}
                onChange={(e) => setBlog({ ...blog, featured: e.target.checked })}
                className="ml-2"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="trending">Trending</Label>
              <input
                type="checkbox"
                id="trending"
                checked={blog.trending}
                onChange={(e) => setBlog({ ...blog, trending: e.target.checked })}
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <Label htmlFor="markdown">Blog Content</Label>
        <MDEditor className=" h-full" value={markdown} onChange={(value) => setMarkdown(value || "")} height={600} preview="live" />
      </div>
      <Button type="submit">Create Blog Post</Button>
    </form>
  )
}

