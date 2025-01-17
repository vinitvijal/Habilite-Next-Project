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
          <div>
            <label
              for="image-upload"
              className=" w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
            >
              <div class="text-center">
                <div class="mb-2">
                  <button
                    id="image-upload"
                    type="button"
                    className="bg-first hover:bg-second text-white rounded-full py-2 px-4"
                  >
                    Select from the computer
                  </button>
                </div>
                <p class="text-gray-500">or drag photo here</p>
                <p class="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
              </div>
            </label>
            <input
              id="image-upload"
              name="image"
              type="file"
              accept="image/*"
              className="sr-only"
            />
          </div>

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
