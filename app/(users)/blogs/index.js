import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const categories = ["Bariatric Surgery", "Gall Bladder Stone", "Hernia", "Laparoscopic Surgery", "Lipoma", "Non-Surgical Weight Loss", "Piles"]
export { categories }


function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}
export { truncateText };

const filepaths = [
    "https://habilite.s3.ap-south-1.amazonaws.com/blogpage-content/bariatric-1.md",
    "https://habilite.s3.ap-south-1.amazonaws.com/blogpage-content/bariatric-2.md",
    "https://habilite.s3.ap-south-1.amazonaws.com/blogpage-content/laparoscopic-1.md",
    "https://habilite.s3.ap-south-1.amazonaws.com/blogpage-content/one-more.md"
]
export { filepaths };

const blogs = await Promise.all(filepaths.map(async (filepath) => {
    const response = await fetch(filepath, { cache: 'force-cache', next: { revalidate: 86400 }});
    if (!response.ok) {
        notFound();
        return null;
    }
    const fileContent = await response.text();
    const { data } = matter(fileContent);
    return data;
}));
export { blogs }


const featured = blogs.filter(blog => {
    return blog.featured
  })
  export {featured}