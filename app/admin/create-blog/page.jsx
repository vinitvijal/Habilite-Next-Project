import React from "react";

export default function CreateBlog() {
  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen shadow-sm ">
      <div className="bg-opacity-80 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-md w-full">
        <form
          method="POST"
          action="/api/saveMarkdown"
          encType="multipart/form-data"
          className="grid grid-cols-1 gap-6"
        >
          <h1 className="text-first text-center font-bold uppercase tracking-wide text-5xl ">
            Create Blog
          </h1>
          <input
            type="text"
            name="blogTitle"
            placeholder="Title"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first -400"
          />
          <input
            type="text"
            name="blogDescription"
            placeholder="Description"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first -400"
          />
          <input
            type="text"
            name="blogAuthor"
            placeholder="Author"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first -400"
          />
          <textarea
            name="blogContent"
            placeholder="Content"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first -400"
          />
          <input
            type="text"
            name="blogTags"
            placeholder="Tags (comma-separated)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first -400"
          />
          {/* <!-- Image Upload --> */}
          <input
            type="file"
            name="blogImage"
            accept="image/*"
            className="p-3 border border-third rounded focus:outline-none focus:border-first"
          />

          <button
            type="submit"
            className="w-full bg-first -500 text-white py-2 rounded-lg font-semibold hover:bg-second -600 focus:outline-none focus:ring-2 focus:ring-first -400 focus:ring-opacity-50"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}
