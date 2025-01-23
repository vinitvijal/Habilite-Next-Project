"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Toolbar } from "@/components/Toolbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleToolbarAction = (action) => {
    let updatedMarkdown = markdown;
    const selection = window.getSelection();
    const selectedText = selection?.toString() || "";

    switch (action) {
      case "bold":
        updatedMarkdown = markdown.replace(selectedText, `**${selectedText}**`);
        break;
      case "italic":
        updatedMarkdown = markdown.replace(selectedText, `*${selectedText}*`);
        break;
      case "link":
        updatedMarkdown = markdown.replace(
          selectedText,
          `[${selectedText}](url)`
        );
        break;
      case "image":
        updatedMarkdown = markdown.replace(
          selectedText,
          `![${selectedText}](image-url)`
        );
        break;
      case "code":
        updatedMarkdown = markdown.replace(selectedText, `\`${selectedText}\``);
        break;
      case "heading":
        updatedMarkdown = markdown.replace(selectedText, `# ${selectedText}`);
        break;
      default:
        break;
    }

    setMarkdown(updatedMarkdown);
  };

  const handleSaveAsDraft = () => {
    console.log("Saving as draft:", { title, description, markdown });
  };

  const handleUpload = () => {
    console.log("Uploading:", { title, description, markdown });
  };

  return (
    <main className=" max-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Editor</h1>
        <div className="flex space-x-8">
          <div className="w-1/2 border shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 space-y-4">
              <Input
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
              <Toolbar onAction={handleToolbarAction} />
              <Textarea
                placeholder="Write your markdown here..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                rows={20}
                className="font-mono"
              />
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={handleSaveAsDraft}>
                  Save as Draft
                </Button>
                <Button onClick={handleUpload}>Upload</Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-white border shadow-sm rounded-lg max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview</h2>
              <div className="prose max-w-none">
                <h1>{title}</h1>
                <p className="text-gray-600">{description}</p>
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
