import BlogEditorForm from "./BlogEditorForm"

export default async function BlogWriterPage({ params }) {
    const slug = (await params).slug
  return (
    <div className="container mx-auto px-4 py-8 max-h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Update</h1>
      <BlogEditorForm slug={slug} />
    </div>
  )
}

