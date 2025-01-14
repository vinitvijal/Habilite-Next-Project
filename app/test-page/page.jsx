'use client'
import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Testimonial, UpdateTes } from '@/actions/testimonials';

function Page({ onClose }) {
    const [showAnimation, setShowAnimation] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        await UpdateTes(
            formData.get('tesid'),
            formData.get('author'),
            formData.get('occupation'),
            formData.get('content')
        );
    };

    const handleClose = () => {
        setShowAnimation(false);
        setTimeout(() => {
            if (onClose) onClose();
            setShowAnimation(true);
        }, 350);
    };

    return (
        <div
            id="appointment"
            className="fixed z-50 inset-0 bg-opacity-40 bg-black backdrop-blur-md w-full flex items-center justify-center"
        >
            <div
                className={`mx-12 px-6 pt-5 max-sm:min-w-[60vw] w-full max-w-md bg-white shadow-black shadow-sm rounded-md ${
                    showAnimation ? 'animate-fadein' : 'animate-fadeout'
                }`}
            >
                <h1 className="mb-4 font-bold text-xl sm:text-2xl text-center">
                    Add Testimonial
                </h1>
                <form className="rounded-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-3">
                        <div>
                            <label htmlFor="tesid" className="block font-medium mb-2">
                                <IoPersonSharp className="text-xl inline-block mr-2" />
                                Id
                            </label>
                            <input
                                type="text"
                                name="tesid"
                                id="tesid"
                                className="rounded-md p-2 border border-third w-full placeholder:text-sm"
                                placeholder="Enter id"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="author" className="block font-medium mb-2">
                                <IoPersonSharp className="text-xl inline-block mr-2" />
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                className="rounded-md p-2 border border-third w-full placeholder:text-sm"
                                placeholder="Enter Author"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="occupation" className="block font-medium mb-2">
                                <MdCall className="text-xl inline-block mr-2" />
                                Occupation
                            </label>
                            <input
                                type="text"
                                name="occupation"
                                id="occupation"
                                className="rounded-md p-2 border border-third w-full placeholder:text-sm"
                                placeholder="Enter Occupation"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="content" className="block font-medium mb-2">
                                <FaPen className="text-xl inline-block mr-2" />
                                Content
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                placeholder="Write Content"
                                rows={4}
                                className="rounded-md w-full p-2 border border-third placeholder:text-sm"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4 pb-4">
                            <button
                                type="submit"
                                className="bg-first w-full py-1 hover:bg-second border-2 border-first hover:border-second focus:scale-90 text-white font-semibold rounded-md"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="w-full py-1 focus:scale-90 border-third border-2 box-border font-semibold rounded-md hover:bg-third"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page;

