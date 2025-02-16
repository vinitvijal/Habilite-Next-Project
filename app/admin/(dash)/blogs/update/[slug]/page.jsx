import BlogEditorForm from "./BlogEditorForm"

export default function BlogWriterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Update</h1>
      <BlogEditorForm />
    </div>
  )
}

