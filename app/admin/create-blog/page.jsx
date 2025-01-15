import React from 'react';

export default function CreateBlog() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form 
        method="POST" 
        action="/api/saveMarkdown" 
        encType="multipart/form-data" 
        className="flex flex-col space-y-4 bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
        <input 
          type="text" 
          name="blogTitle" 
          placeholder="Title" 
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <input 
          type="text" 
          name="blogDescription" 
          placeholder="Description" 
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <input 
          type="text" 
          name="blogAuthor" 
          placeholder="Author" 
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <textarea 
          name="blogContent" 
          placeholder="Content" 
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 h-32 resize-none"
        />
        <input 
          type="text" 
          name="blogTags" 
          placeholder="Tags (comma-separated)" 
          className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <input 
          type="file" 
          name="blogImage" 
          accept="image/*" 
          className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <button 
          type="submit" 
          className="bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600 focus:outline-none"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}
