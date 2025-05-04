"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getTestimonials } from "@/actions/testimonial"

export const revalidate = 86400



export default function TestimonialCarouselEnhanced() {
    const [testimonials, setTestimonials] = useState([])

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setActiveIndex(index)
  }


  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await getTestimonials()
      console.log(res)
      setTestimonials(res)
    }

    fetchTestimonials()
  }, [])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isPaused])

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextTestimonial()
    }

    if (touchStart - touchEnd < -50) {
      prevTestimonial()
    }
  }

  return (
    <section className="w-full py-12 bg-slate-50">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">What Our Patients Say</h2>
          <p className="mt-4 text-muted-foreground text-wrap max-w-[700px]">
            Read testimonials from patients who have experienced our care and services.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials && testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0  px-4 md:px-12">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="mb-4 text-teal-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-10 w-10"
                          >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                          </svg>
                        </div>
                        <p className="text-slate-700 mb-4 text-wrap">{testimonial.TesContent}</p>
                      </div>
                      <div className="mt-auto">
                        <p className="font-semibold text-slate-900 text-wrap">{testimonial.TesAuthor}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.TesOccupation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hidden md:flex z-10"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hidden md:flex z-10"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials && testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className={cn(
                  "w-2 h-2 p-0 rounded-full",
                  index === activeIndex ? "bg-teal-500 border-teal-500" : "bg-slate-200 border-slate-200",
                )}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
