import React from "react";

export default function CreateBlog() {
  return (
    <div className="container mx-auto p-2 flex items-center justify-center min-h-screen border-3 border-solid border-slate-200">
      <div className="p-8 rounded-3xl w-3/5 shadow-sm border border-solid border-gray-300">
        <form

          encType="multipart/form-data"
          className="grid grid-cols-1 gap-6 "
        >
          <div className="flex items-center justify-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-first text-center font-semibold tracking-wide text-4xl pb-2">CREATE BLOG</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

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
            placeholder="Select Image"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100           text-gray-700 shadow-sm hover:bg-gray-200 transition duration-150 ease-in-out"
          />

          <div className="flex justify-center item-center mt-3">
            <button
              type="submit"
              className="w-2/3 bg-gradient-to-r from-first to-second text-white py-2 rounded-3xl font-semibold hover:bg-second -600 focus:outline-none focus:ring-2 focus:ring-first -400 focus:ring-opacity-50"
            >
              Create
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
