'use client'
import React from 'react'
import { motion, useScroll } from "motion/react"

export function HosHeading(){
    const { scrollYProgress } = useScroll();

    return (
        <motion.div className=" mb-12 max-w-[1252px] w-full" >
            <div className="w-2/3 h-2 py-4">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 100, duration: 1000 }} className=" h-1 rounded-lg bg-blue-600 animate-fade-right"></motion.div>
            </div>
            <div>
              <h1 className="font-semibold text-blue-600 text-5xl">
                Hospital Affiliations
              </h1>
            </div>
        </motion.div>
    )
  }
  
  