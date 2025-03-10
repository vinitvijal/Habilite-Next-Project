"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { getBlogBySlug, updateBlog } from "@/actions/blogs"
import { useRouter } from "next/navigation"

const MDEditor = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false })

export default function BlogWriterForm(params) {
    const slug = params.slug
const [markdown, setMarkdown] = useState('')
const [blogId, setBlogId] = useState('')
const [blogMeta, setBlog] = useState({
    id: 0,
    title: "",
    description: "",
    slug: "",
    excerpt: "",
    date: new Date().toISOString().slice(0, 10),
    author: "",
    authorImage: "",
    blogImage: "",
    tag: "",
    featured: false,
    trending: false
})
const router = useRouter()

async function getData(){
    const blog = await getBlogBySlug(slug)
    console.log(blog)
    if(!blog){
        router.back()
    }
    // split the content and metadata
    const content = blog.blogContent.split('---')
    // parse the metadata
    
    const metadata = content[1].trim().split('\n').reduce((acc, line) => {
      const [key, value] = line.split(': ').map(item => item.trim());
      acc[key] = value;
      return acc;
    }, {});

    setBlog({
      id: metadata.id || 0,
      title: metadata.title || "",
      description: metadata.description || "",
      slug: metadata.slug || "",
      excerpt: metadata.excerpt || "",
      date: metadata.date || new Date().toISOString().slice(0, 10),
      author: metadata.author || "",
      authorImage: metadata.authorImage || "",
      blogImage: metadata.blogImage || "",
      tag: metadata.tag || "",
      featured: metadata.featured === 'true',
      trending: metadata.trending === 'true'
    });


    // console.log(blogMeta)
    setMarkdown(content[2].trim())
    setBlogId(blog.blogID)
}


useEffect(()=>{
    getData()
}, [])

const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission here
    const blogString = `---
    id: ${blogMeta.id}
    title: ${blogMeta.title}
    description: ${blogMeta.description}
    slug: ${blogMeta.slug}
    excerpt: ${blogMeta.excerpt}
    date: ${blogMeta.date}
    author: ${blogMeta.author}
    authorImage: ${blogMeta.authorImage}
    blogImage: ${blogMeta.blogImage}
    tag: ${blogMeta.tag}
    featured: ${blogMeta.featured}
    trending: ${blogMeta.trending}
---`;

    const res = await updateBlog(blogString + '\n' + markdown, blogId)
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
      <div>
          <div className="border p-4 rounded-md shadow-md">
            <div className="mb-4">
              <Label htmlFor="title">Title</Label>
              <input
                type="text"
                id="title"
                value={blogMeta.title}
                onChange={(e) => setBlog({ ...blogMeta, title: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                value={blogMeta.description}
                onChange={(e) => setBlog({ ...blogMeta, description: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="slug">Slug</Label>
              <input
                type="text"
                id="slug"
                value={blogMeta.slug}
                onChange={(e) => setBlog({ ...blogMeta, slug: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="excerpt">Excerpt</Label>
              <textarea
                id="excerpt"
                value={blogMeta.excerpt}
                onChange={(e) => setBlog({ ...blogMeta, excerpt: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <input
                type="date"
                id="date"
                value={blogMeta.date}
                onChange={(e) => setBlog({ ...blogMeta, date: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="author">Author</Label>
              <input
                type="text"
                id="author"
                value={blogMeta.author}
                onChange={(e) => setBlog({ ...blogMeta, author: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="authorImage">Author Image URL</Label>
              <input
                type="text"
                id="authorImage"
                value={blogMeta.authorImage}
                onChange={(e) => setBlog({ ...blogMeta, authorImage: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="blogImage">Blog Image URL</Label>
              <input
                type="text"
                id="blogImage"
                value={blogMeta.blogImage}
                onChange={(e) => setBlog({ ...blogMeta, blogImage: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="tag">Tag</Label>
              <input
                type="text"
                id="tag"
                value={blogMeta.tag}
                onChange={(e) => setBlog({ ...blogMeta, tag: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="featured">Featured</Label>
              <input
                type="checkbox"
                id="featured"
                checked={blogMeta.featured}
                onChange={(e) => setBlog({ ...blogMeta, featured: e.target.checked })}
                className="ml-2"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="trending">Trending</Label>
              <input
                type="checkbox"
                id="trending"
                checked={blogMeta.trending}
                onChange={(e) => setBlog({ ...blogMeta, trending: e.target.checked })}
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <Label htmlFor="markdown">Blog Content</Label>
        <MDEditor className=" h-full" value={markdown} onChange={(value) => setMarkdown(value || "")} height={600} preview="live" />
      </div>
      <Button type="submit">Update Blog</Button>
    </form>
  )
}

