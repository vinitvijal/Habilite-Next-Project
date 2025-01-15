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
    return new NextResponse(JSON.stringify({ message: 'All fields are required.' }), { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'markdownFiles', `${blogTitle.replace(/\s+/g, '-')}.md`);

  const markdownContent = `
# ${blogTitle}

## Description
${blogDescription}

## Author
${blogAuthor}

## Tags
${blogTags.split(',').map(tag => tag.trim()).join(', ')}

## Content
${blogContent}
`;

  try {
    fs.writeFileSync(filePath, markdownContent);

    if (blogImage && blogImage.size > 0) {
      const imageBuffer = Buffer.from(await blogImage.arrayBuffer());
      const imageExtension = blogImage.name.split('.').pop();
      const imageFilePath = path.join(process.cwd(), 'markdownFiles', `${blogTitle.replace(/\s+/g, '-')}.${imageExtension}`);

      fs.writeFileSync(imageFilePath, imageBuffer);
    }

    return new NextResponse(JSON.stringify({ message: 'Markdown and image saved successfully!' }), { status: 200 });
  } catch (err) {
    console.error('Failed to save markdown or image file: ', err);
    return new NextResponse(JSON.stringify({ message: 'Failed to save markdown or image.' }), { status: 500 });
  }
}
