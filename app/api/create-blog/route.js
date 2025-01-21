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
    // Save Markdown content
    const subdirectoryPath = path.join(process.cwd(), 'markdownFiles', blogTitle.replace(/\s+/g, '-'));
    if (!fs.existsSync(subdirectoryPath)) {
      fs.mkdirSync(subdirectoryPath, { recursive: true });
    }

    let markdownContent = `# ${blogTitle}\n`;

    // Handle image
    if (blogImage && blogImage.size > 0) {
      const imageBuffer = Buffer.from(await blogImage.arrayBuffer());
      const imageExtension = blogImage.name.split('.').pop();

      // Save image to the public folder
      const publicImagePath = path.join(process.cwd(), 'public', 'blogImages');
      if (!fs.existsSync(publicImagePath)) {
        fs.mkdirSync(publicImagePath, { recursive: true });
      }

      const imageFileName = `${blogTitle.replace(/\s+/g, '-')}.${imageExtension}`;
      const imageFilePath = path.join(process.cwd(), 'public', 'blogImages', `${blogTitle.replace(/\s+/g, '-')}.${imageExtension}`);
      fs.writeFileSync(imageFilePath, imageBuffer);

      // In markdown content
      markdownContent += `\n![${blogTitle}](/blogImages/${blogTitle.replace(/\s+/g, '-')}.${imageExtension})\n`;


    }

    markdownContent += `
## Description
${blogDescription}

## Author
${blogAuthor}

## Tags
${blogTags.split(',').map((tag) => tag.trim()).join(', ')}

## Content
${blogContent}
`;

    const markdownFilePath = path.join(subdirectoryPath, `${blogTitle.replace(/\s+/g, '-')}.md`);
    fs.writeFileSync(markdownFilePath, markdownContent);

    // Return HTML response
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog Created</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            max-width: 70%;
            margin: 50px auto;
            padding: 20px;
            background: #fff;
            border-width: 1px;
            border-style: solid;
            border-color: #d1d5db;
            border-radius: 1rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            text-align: center;
          }
          h1 {
            color: #1463F3;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
          }
          a:hover {
            background: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Blog Created Successfully!</h1>
          <p>Your blog has been created. You can preview it below:</p>
          <a href="/markdownFiles/${blogTitle}/${encodeURIComponent(blogTitle.replace(/\s+/g, '-'))}">Preview Blog</a>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (err) {
    console.error('Failed to save markdown or image file: ', err);
    return NextResponse.json(
      { message: 'Internal server error while saving the blog.' },
      { status: 500 }
    );
  }
}
