"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Delete, Edit, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  createTestimonial,
  deleteAdminTest,
  getAdminTest,
} from "@/actions/testimonial";
import { getBlogs } from "@/actions/blogs";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Page() {
  const [isNewTestimonialOpen, setIsNewTestiomonialOpen] = useState(false);
  const [tests, setTests] = useState([]);

  async function getData() {
    const token = localStorage.getItem("token");
    const data = await getBlogs(token);
    if (!data) {
      alert("Error in Validation");
    }
    setTests(data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="container mx-auto py-10 overflow-y-auto h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link href={'/admin/blogs/create-blog'} className=" flex items-center px-3 py-2 rounded-md text-zinc-100 bg-zinc-800">
          <Plus className="mr-2 h-4 w-4" />
          New Blog
        </Link>
        {/* type Blogs = {
    blogID: string;
    blogTitle: string;
    blogDescription: string;
    blogDate: Date | null;
    blogAuthor: string;
    blogContent: string;
    blogTags: string[];
} */}
      </div>
      <div className=" grid grid-cols-3 gap-4">
        {tests && tests.map((test) => (
          <Card key={test.blogID}>
            <CardHeader>
              <CardTitle>
                {test.blogTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className='h-20 overflow-y-auto mb-4'>
              {test.blogDescription}
            </CardContent>
            <CardFooter className='flex gap-4'>
              <Button variant='destructive'>
                Delete <Delete />
              </Button>
              <Link href={`/admin/blogs/update/${test.blogSlug}`} className=" flex gap-2 items-center float-right bg-zinc-800 px-4 py-2 text-zinc-100 text-sm rounded-md">
                Edit <Edit size='20'/>
              </Link>
              <Link href={`/blogs/${test.blogSlug}`} className=" flex gap-2 items-center float-right bg-zinc-800 px-4 py-2 text-zinc-100 text-sm rounded-md">
                Visit <ArrowTopRightIcon size='20'/>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
