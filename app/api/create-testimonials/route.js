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
  const testiContent = data.get('testiContent');
  const testiName = data.get('testiName');
  const testiDesignation = data.get('testiDesignation');

  if (!testiContent || !testiName || !testiDesignation) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  try {
    // Save Markdown content
    const subdirectoryPath = path.join(process.cwd(), 'makdown-testimonials', testiContent.replace(/\s+/g, '-'));
    if (!fs.existsSync(subdirectoryPath)) {
      fs.mkdirSync(subdirectoryPath, { recursive: true });
    }

    let markdownContent = `# ${testiContent}\n\n**Name:** ${testiName}\n\n**Designation:** ${testiDesignation}\n`;

    const markdownFilePath = path.join(subdirectoryPath, `${testiContent.replace(/\s+/g, '-')}.md`);
    fs.writeFileSync(markdownFilePath, markdownContent);

    // Return HTML response
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testimonial Created</title>
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
          <h1>Testimonial added Successfully!</h1>
          <p>Your testimonial has been added!</p>
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
    console.error('Failed to save markdown file: ', err);
    return NextResponse.json(
      { message: 'Internal server error while saving the testimonial.' },
      { status: 500 }
    );
  }
}
