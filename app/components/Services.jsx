"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Separator from "@radix-ui/react-separator";
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion";

function ServiceBox({ title, imageSrc, links }) {
  const controls = useAnimation();
  const titleControls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          titleControls.start('visible');
        } else {
          controls.start('hidden');
          titleControls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [controls, titleControls]);

  return (
    <div ref={ref} className='w-80 h-auto bg-white shadow-md flex-col justify-center items-center rounded-2xl hover:scale-105 hover:duration-300 hover:shadow-xl border-1'>
      <div className='w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-2xl'>
        <motion.div
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } } // box heading fade in
          }}
          className="text-white"
        >
          <Link href='#'>{title}</Link>
        </motion.div>
      </div>
      <div className='img w-full h-[28vh] justify-center items-center container'>
        <img src={imageSrc} alt="Surgery Image" className="h-full object-cover w-full curved-image"/>
      </div>
      <div className='flex w-full flex-col flex-1 justify-center items-center my-6 gap-2'>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              transition={{ duration: 1, delay: index * 0.3 }}  //links flying in from alternate direction
              className="flex justify-center w-full"  // Ensure the links are centered
            >
              <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center' href={link.href}>
                {link.text}
              </Link>
            </motion.div>
            {index < links.length - 1 && <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const titleControls = useAnimation();
  const titleRef = useRef();
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        titleControls.start('visible');
      } else if (scrollTop < lastScrollTop) {
        if (titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'none';
        }
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, titleControls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleControls.start('visible');
        } else {
          titleControls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => observer.disconnect();
  }, [titleControls]);

  return (
    <section className="min-h-screen w-screen bg-white py-10 flex flex-col items-center">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        variants={{
          hidden: { opacity: 0, x: -80 }, //heading left slide in animation
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
        }}
        className="container mx-auto px-6"
      >
        <motion.h1 className="text-4xl font-bold text-center mb-4 text-second">
          SERVICES & SPECIALIZATION
        </motion.h1>
        <motion.h2 className="text-2xl text-center mb-8 text-first">
          Rapid Recovery Realized.
        </motion.h2>
      </motion.div>
      <div className='max-w-5/6 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 h-full justify-center gap-20'>
        <ServiceBox
          title="Bariatrics / Weight loss"
          imageSrc="/weightloss.jpg"
          links={[
            { href: "#", text: "Bariatric surgery" },
            { href: "#", text: <>Non-surgical weight loss <br /> program</> },
            { href: "#", text: "Surgery for diabetes" },
            { href: "#", text: "Intragastric Balloon" },
          ]}
        />
        <ServiceBox
          title="Laparoscopic Surgery"
          imageSrc="/surgery.jpeg"
          links={[
            { href: "#", text: "Gall stones" },
            { href: "#", text: "Hernia" },
            { href: "#", text: "Rectal prolapse" },
            { href: "#", text: "Appendix" },
            { href: "#", text: "Gerd" },
          ]}
        />
        <ServiceBox
          title="Laser Surgery"
          imageSrc="/laserSurgery.jpg"
          links={[
            { href: "#", text: "Hemorrhoids/Piles" },
            { href: "#", text: "Anal fissure" },
            { href: "#", text: "Pilonidal sinus" },
            { href: "#", text: "Anal fistula" },
            { href: "#", text: "Lipoma" },
            { href: "#", text: "Circumcision" },
          ]}
        />
      </div>
    </section>
  );
}

export default Services;












// "use client";

// import React, { useEffect, useRef } from 'react';
// import * as Separator from "@radix-ui/react-separator";
// import Link from 'next/link';
// import { motion, useAnimation } from "framer-motion";

// function ServiceBox({ title, imageSrc, links }) {
//   const controls = useAnimation();
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start('visible');
//         } else {
//           controls.start('hidden'); 
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => observer.disconnect();
//   }, [controls]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
//       }}
//       className='w-80 h-auto bg-white shadow-md flex-col justify-center items-center rounded-2xl hover:scale-105 hover:duration-300 hover:shadow-xl border-1'
//     >
//       <Link href='#' className='w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-2xl text-white'>
//         {title}
//       </Link>
//       <div className='img w-full h-[28vh] justify-center items-center container'>
//         <img src={imageSrc} alt="Surgery Image" className="h-full object-cover w-full curved-image"/>
//       </div>
//       <div className='flex w-full flex-col flex-1 justify-center items-center my-6 gap-2'>
//         {links.map((link, index) => (
//           <React.Fragment key={index}>
//             <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href={link.href}>{link.text}</Link>
//             {index < links.length - 1 && <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />}
//           </React.Fragment>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function Services() {
//   return (
//     <section className="min-h-screen w-screen bg-white py-10 flex flex-col items-center">
//       <motion.div className="container mx-auto px-6">
//         <h1 className="text-4xl font-bold text-center mb-4 text-second">SERVICES & SPECIALIZATION</h1>
//         <h2 className="text-2xl text-center mb-8 text-first">Rapid Recovery Realized.</h2>
//       </motion.div>
//       <div className='max-w-5/6 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 h-full justify-center gap-20'>
//         <ServiceBox
//           title="Bariatrics / Weight loss"
//           imageSrc="/weightloss.jpg"
//           links={[
//             { href: "#", text: "Bariatric surgery" },
//             { href: "#", text: "Non-surgical weight loss program" },
//             { href: "#", text: "Surgery for diabetes" },
//             { href: "#", text: "Intragastric Balloon" },
//           ]}
//         />
//         <ServiceBox
//           title="Laparoscopic Surgery"
//           imageSrc="/surgery.jpeg"
//           links={[
//             { href: "#", text: "Gall stones" },
//             { href: "#", text: "Hernia" },
//             { href: "#", text: "Rectal prolapse" },
//             { href: "#", text: "Appendix" },
//             { href: "#", text: "Gerd" },
//           ]}
//         />
//         <ServiceBox
//           title="Laser Surgery"
//           imageSrc="/laserSurgery.jpg"
//           links={[
//             { href: "#", text: "Hemorrhoids/Piles" },
//             { href: "#", text: "Anal fissure" },
//             { href: "#", text: "Pilonidal sinus" },
//             { href: "#", text: "Anal fistula" },
//             { href: "#", text: "Lipoma" },
//             { href: "#", text: "Circumcision" },
//           ]}
//         />
//       </div>
//     </section>
//   );
// }

// export default Services;
