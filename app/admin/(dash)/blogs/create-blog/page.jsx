import BlogWriterForm from "./BlogWriterForm"

export default function BlogWriterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Blog </h1>
      <BlogWriterForm />
    </div>
  )
}

