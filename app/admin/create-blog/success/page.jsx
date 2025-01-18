export default function SuccessPage() {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold text-green-600">Blog Created Successfully!</h1>
        <p className="mt-4">Your blog has been created. You can preview it below:</p>
        <a
          href="/admin/create-blog/preview"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Preview Blog
        </a>
      </div>
    );
  }
  