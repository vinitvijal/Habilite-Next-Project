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
    console.log(data[2].blogContent)
    setTests(data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="container mx-auto py-10 overflow-y-auto h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Button onClick={() => setIsNewTestiomonialOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Blog
        </Button>
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
            <CardContent>
              {test.blogDescription}
            </CardContent>
            <CardFooter className='flex gap-4'>
              <Button variant='destructive'>
                Delete <Delete />
              </Button>
              <Button >
                Edit <Edit/>
              </Button>
              <Link href={`/blogs/${test.blogID}`}>
                Visit <ArrowTopRightIcon />
              </Link>
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
