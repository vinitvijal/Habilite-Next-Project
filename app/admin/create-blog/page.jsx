import React from 'react';

export default function CreateBlog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-3">
      <form 
        method="POST" 
        action="/api/saveMarkdown" 
        encType="multipart/form-data" 
        className="flex flex-col space-y-4 bg-white p-6 rounded shadow-md w-2/3"
      >
        <h1 className="text-4xl font-bold mb-4">Create Blog</h1>
        <input 
          type="text" 
          name="blogTitle" 
          placeholder="Title" 
          required
          className="p-3 border border-third rounded focus:outline-none focus:border-first resize-none"
        />
        <input 
          type="text" 
          name="blogDescription" 
          placeholder="Description" 
          required
          className="p-3 border border-third rounded focus:outline-none focus:border-first resize-none"
        />
        <input 
          type="text" 
          name="blogAuthor" 
          placeholder="Author" 
          required
          className="p-3 border border-third rounded focus:outline-none focus:border-first resize-none"
        />
        <textarea 
          name="blogContent" 
          placeholder="Content" 
          required
          className="p-3 border border-third rounded focus:outline-none focus:border-first h-32 resize-y"
        />
        <input 
          type="text" 
          name="blogTags" 
          placeholder="Tags (comma-separated)" 
          className="p-3 border border-third rounded focus:outline-none focus:border-first resize-none"
        />
        <input 
          type="file" 
          name="blogImage" 
          accept="image/*" 
          className="p-3 border border-third rounded focus:outline-none focus:border-first"
        />
        <button 
          type="submit" 
          className="bg-first text-white p-3 rounded hover:bg-first focus:outline-none resize-none"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}
