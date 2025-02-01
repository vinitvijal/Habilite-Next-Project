'use client'
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Activity, Users, Star } from "lucide-react"


const fadeImages = [
  {
    url: '/images/banner-1.webp',
  },
  {
    url: '/images/banner-2.webp',
  },
  {
    url: '/images/banner-3.webp',
  },
  {
    url: '/images/banner-4.webp',
  },
  {
    url: '/images/banner-5.jpg',
  }
];

const Hero = () => {
  return (
    <div className="relative max-h-screen md:px-0 sm:pb-0 ">
      <div className="h-full">
        <Fade arrows={false}
        duration={2000}
        transitionDuration={1000}
        infinite={true}
        pauseOnHover={true}

        >
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img src={fadeImage.url} className='md:h-full h-[40vh] object-cover md:w-full w-[160vw]' />
          </div>
        ))}
      </Fade>
      </div>
         <StatsPage />
      
    </div>
  );
};



function StatsPage() {
  return (
    <div className=" bg-transparent -top-40 z-40 relative">
      <div className=" mx-auto px-4">
        

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <AnimatedCounter
            endValue={150}
            label="Patients Treated"
            sublabel="Successful recoveries"
            icon={<Users className="w-6 h-6" />}
            gradient="from-first to-first/60"
          />
          <AnimatedCounter
            endValue={200}
            label="Surgeries Done"
            sublabel="Complex procedures"
            icon={<Activity className="w-6 h-6" />}
            gradient="from-second to-second/60"
          />
          <AnimatedCounter
            endValue={160}
            label="Expert Consultations"
            sublabel="Professional guidance"
            icon={<Star className="w-6 h-6" />}
            gradient="from-first to-first/60"
          />
        </div>
      </div>
    </div>
  )
}

function AnimatedCounter({
  endValue,
  label,
  sublabel,
  icon,
  gradient,
}) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2500
      const increment = endValue / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= endValue) {
          setCount(endValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, endValue])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-white rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] shadow-lg group-hover:shadow-xl" />
      <div className="relative p-8 flex justify-center items-center flex-col bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient} text-white`}>{icon}</div>
        </div>
        <div
          className={`text-5xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent tabular-nums`}
        >
          {count}+
        </div>
        <div className="text-slate-900 font-semibold text-lg mb-1">{label}</div>
        <div className="text-slate-500 text-sm">{sublabel}</div>
      </div>
    </motion.div>
  )
}





export default Hero;
