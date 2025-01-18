import fs from 'fs';
import path from 'path';

export default async function PreviewPage() {
  const directoryPath = path.join(process.cwd(), 'markdownFiles');
  const directories = fs.readdirSync(directoryPath);
  const latestBlogDir = directories[directories.length - 1];
  const filePath = path.join(directoryPath, latestBlogDir, `${latestBlogDir}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Blog Preview</h1>
      <article className="prose mt-4">{content}</article>
    </div>
  );
}
