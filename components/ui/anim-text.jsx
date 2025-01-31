"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const animationVariants = {
  calmInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
      },
      visible: {
        y: 0,
        transition: { ease: [0.125, 0.92, 0.69, 0.975], duration: 0.75 },
      },
    },
  },
};

const TextAnimate = ({ text, type = "calmInUp", ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const letters = Array.from(text);
  const { container, child } = animationVariants[type] || animationVariants["calmInUp"];
  const ctrls = useAnimation();

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [isInView, ctrls]);

  return (
    <motion.h2
      ref={ref}
      style={{ display: "flex", overflow: "hidden" }}
      role="heading"
      variants={container}
      initial="hidden"
      animate={ctrls}
      className="font-black text-black dark:text-neutral-100"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default TextAnimate;
