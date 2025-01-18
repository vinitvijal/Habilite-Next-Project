import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const data = await req.formData();
  const blogTitle = data.get('blogTitle');
  const blogDescription = data.get('blogDescription');
  const blogAuthor = data.get('blogAuthor');
  const blogContent = data.get('blogContent');
  const blogTags = data.get('blogTags');
  const blogImage = data.get('blogImage');

  if (!blogTitle || !blogDescription || !blogAuthor || !blogContent) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  try {
    const subdirectoryPath = path.join(process.cwd(), 'markdownFiles', blogTitle.replace(/\s+/g, '-'));
    if (!fs.existsSync(subdirectoryPath)) {
      fs.mkdirSync(subdirectoryPath, { recursive: true });
    }

    let markdownContent = `
# ${blogTitle}
`;

    if (blogImage && blogImage.size > 0) {
      const imageBuffer = Buffer.from(await blogImage.arrayBuffer());
      const imageExtension = blogImage.name.split('.').pop();
      const imageFilePath = path.join(subdirectoryPath, `${blogTitle.replace(/\s+/g, '-')}.${imageExtension}`);
      fs.writeFileSync(imageFilePath, imageBuffer);

      // Add image preview to the markdown content just after the title
      const imageFileName = `${blogTitle.replace(/\s+/g, '-')}.${imageExtension}`;
      markdownContent += `
![${blogTitle} Image](./${imageFileName})
`;
    }

    markdownContent += `
## Description
${blogDescription}

## Author
${blogAuthor}

## Tags
${blogTags.split(',').map(tag => tag.trim()).join(', ')}

## Content
${blogContent}
`;

    const markdownFilePath = path.join(subdirectoryPath, `${blogTitle.replace(/\s+/g, '-')}.md`);
    fs.writeFileSync(markdownFilePath, markdownContent);

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
    )
  } catch (err) {
    console.error('Failed to save markdown or image file: ', err);
  }
}
