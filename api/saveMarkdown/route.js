import fs from 'fs';
import path from 'path';

export async function getServerSideProps(context) {
  const { req, res } = context;

  if (req.method === 'POST') {
    const data = await new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const { blogTitle, blogDescription, blogAuthor, blogContent, blogTags } = data.fields;
    const blogImage = data.files.blogImage;

    if (!blogTitle || !blogDescription || !blogAuthor || !blogContent) {
      return { props: { message: 'All fields are required.' } };
    }

    const filePath = path.join(process.cwd(), 'markdownFiles', `${blogTitle.replace(/\s+/g, '-')}.mdx`);

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
        const imageBuffer = fs.readFileSync(blogImage.path);
        const imageExtension = blogImage.name.split('.').pop();
        const imageFilePath = path.join(process.cwd(), 'markdownFiles', `${blogTitle.replace(/\s+/g, '-')}.${imageExtension}`);

        fs.writeFileSync(imageFilePath, imageBuffer);
      }

      return { props: { message: 'Blog saved successfully!' } };
    } catch (err) {
      console.error('Failed to save markdown or image file: ', err);
      return { props: { message: 'Failed to save blog due to some unknown error!' } };
    }
  }

  return { props: { message: '' } };
}
