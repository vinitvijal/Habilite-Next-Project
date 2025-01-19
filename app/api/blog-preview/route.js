import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export async function GET(req) {
    const url = new URL(req.url);
    const blogTitle = url.searchParams.get('blogTitle');
  
    if (!blogTitle) {
      return NextResponse.json({ message: 'Blog title is required.' }, { status: 400 });
    }
  
    try {
      const encodedBlogTitle = encodeURIComponent(blogTitle.replace(/\s+/g, '-'));
      const markdownFilePath = path.join(
        process.cwd(),
        'markdownFiles',
        blogTitle.replace(/\s+/g, '-'),
        `${encodedBlogTitle}.md`
      );
  
      if (!fs.existsSync(markdownFilePath)) {
        console.log(`File not found at ${markdownFilePath}`);
        return new NextResponse(
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Blog Not Found</title>
          </head>
          <body>
            <h1>404 - Blog Not Found</h1>
            <p>The blog you are looking for does not exist or has been deleted.</p>
          </body>
          </html>
          `,
          { headers: { 'Content-Type': 'text/html' }, status: 404 }
        );
      }
  
      const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');
      const htmlContent = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(markdownContent);
  
      return new NextResponse(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${blogTitle} - Preview</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f9f9f9;
              color: #333;
            }
            .content {
              max-width: 800px;
              margin: 50px auto;
              background: #fff;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1, h2, h3 {
              color: #1463F3;
            }
            img {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 20px auto;
            }
            p {
              line-height: 1.6;
              color: #555;
            }
            a {
              color: #1463F3;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="content">
            ${htmlContent}
          </div>
        </body>
        </html>
        `,
        { headers: { 'Content-Type': 'text/html' } }
      );
    } catch (err) {
      console.error('Error rendering blog preview:', err);
      return NextResponse.json(
        { message: 'Internal server error while rendering the blog preview.' },
        { status: 500 }
      );
    }
  }
  