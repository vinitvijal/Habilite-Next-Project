"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as Separator from "@radix-ui/react-separator";
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion";
import TextAnimate from '@/components/ui/anim-text';

// ServiceBox component
function ServiceBox({ title, imageSrc, links, index }) {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }  // Threshold for card animation
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: 100 }, // Slide in from right
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.2 } }  // Duration and delay for the animation
      }}
      className='w-4/5 lg:w-full md:w-full xl:w-full 2xl:w-full  min-h-[560px] bg-white shadow-md flex-col justify-center items-center rounded-lg border-1 m-auto'
    >
      <div className='w-full h-16 px-4 bg-second rounded-t-lg font-semibold flex justify-center items-center text-xl sm:text-lg'>
        <div className="text-white">
          <Link href='#'>{title}</Link>
        </div>
      </div>
      <div className='img w-full h-[28vh] justify-center items-center container'>
        <img src={imageSrc} alt="Surgery Image" className="h-full object-cover w-full curved-image" />
      </div>
      <div className='flex w-full flex-col flex-1 justify-center items-center my-6 gap-2'>
        {links.map((link, linkIndex) => (
          <React.Fragment key={linkIndex}>
            <div className="flex justify-center w-full">
              <Link className='text-lg sm:text-md font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center' href={link.href}>
                {link.text}
              </Link>
            </div>
            {linkIndex < links.length - 1 && <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}

// Services component
function Services() {
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current || !subtitleRef.current) {
        return;
      }
      
      if (titleRef.current.getBoundingClientRect().top < window.innerHeight && titleRef.current.getBoundingClientRect().bottom >= 0) {
        titleControls.start('visible');
      } else {
        titleControls.start('hidden');
      }

      if (subtitleRef.current.getBoundingClientRect().top < window.innerHeight && subtitleRef.current.getBoundingClientRect().bottom >= 0) {
        subtitleControls.start('visible');
      } else {
        subtitleControls.start('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [titleControls, subtitleControls]);

  return (
    <section className=" min-h-screen w-full bg-white py-10 flex flex-col items-center">


      <motion.div className='flex flex-col gap-2 items-center pt-10 pb-14'>
        <TextAnimate text="SERVICES & SPECIALIZATION" type="calmInUp" className="text-2xl md:text-4xl text-center font-bold whitespace-normal" />
        <TextAnimate text="Rapid Recovery Realized." type="calmInUp" className='md:text-2xl text-lg font-medium text-first' />
      </motion.div>


      <div className='flex justify-center'>
        <div className='max-w-5/6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-baseline mt-4 gap-8'>
          {[
            { title: "Bariatrics / Weight loss", imageSrc: "/weightloss.jpg", links: [
              { href: "#", text: "Bariatric surgery" },
              { href: "#", text: <>Non-surgical weight loss <br /> program</> },
              { href: "#", text: "Surgery for diabetes" },
              { href: "#", text: "Intragastric Balloon" },
            ]},
            { title: "Laparoscopic Surgery", imageSrc: "/surgery.jpeg", links: [
              { href: "#", text: "Gall stones" },
              { href: "#", text: "Hernia" },
              { href: "#", text: "Rectal prolapse" },
              { href: "#", text: "Appendix" },
              { href: "#", text: "Gerd" },
            ]},
            { title: "Laser Surgery", imageSrc: "/laserSurgery.jpg", links: [
              { href: "#", text: "Hemorrhoids/Piles" },
              { href: "#", text: "Anal fissure" },
              { href: "#", text: "Pilonidal sinus" },
              { href: "#", text: "Anal fistula" },
              { href: "#", text: "Lipoma" },
              { href: "#", text: "Circumcision" },
            ]},
          ].map((service, index) => (
            <ServiceBox key={index} title={service.title} imageSrc={service.imageSrc} links={service.links} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;


























// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import * as Separator from "@radix-ui/react-separator";
// import Link from 'next/link';
// import { motion, useAnimation } from "framer-motion";

// function ServiceBox({ title, imageSrc, links }) {
//   const controls = useAnimation();
//   const titleControls = useAnimation();
//   const ref = useRef();
//   const [scrollingUp, setScrollingUp] = useState(false);
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start('visible');
//           titleControls.start('visible');
//         } else {
//           controls.start('hidden');
//           titleControls.start('hidden');
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [controls, titleControls]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       if (scrollTop < lastScrollTop) {
//         setScrollingUp(true);
//       } else {
//         setScrollingUp(false);
//       }
//       setLastScrollTop(scrollTop); // Update lastScrollTop here
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollTop]);

//   return (
//     <div ref={ref} className='w-80 h-auto bg-white shadow-md flex-col justify-center items-center rounded-2xl hover:scale-105 hover:duration-300 hover:shadow-xl border-1'>
//       <div className='w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-2xl'>
//         <motion.div
//           initial="hidden"
//           animate={titleControls}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { duration: 0.8 } } // box heading fade in
//           }}
//           className="text-white"
//         >
//           <Link href='#'>{title}</Link>
//         </motion.div>
//       </div>
//       <div className='img w-full h-[28vh] justify-center items-center container'>
//         <img src={imageSrc} alt="Surgery Image" className="h-full object-cover w-full curved-image" />
//       </div>
//       <div className='flex w-full flex-col flex-1 justify-center items-center my-6 gap-2'>
//         {links.map((link, index) => {
//           const animationIndex = scrollingUp ? links.length - 1 - index : index;
//           return (
//             <React.Fragment key={index}>
//               <motion.div
//                 initial={{ x: scrollingUp ? (animationIndex % 2 === 0 ? 100 : -100) : (index % 2 === 0 ? -100 : 100), opacity: 0 }}
//                 animate={controls}
//                 variants={{
//                   hidden: { x: scrollingUp ? (animationIndex % 2 === 0 ? 100 : -100) : (index % 2 === 0 ? -100 : 100), opacity: 0 },
//                   visible: { x: 0, opacity: 1 }
//                 }}
//                 transition={{ duration: 1, delay: animationIndex * 0.3 }} // links flying in from alternate direction
//                 className="flex justify-center w-full" // Ensure the links are centered
//               >
//                 <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center' href={link.href}>
//                   {link.text}
//                 </Link>
//               </motion.div>
//               {index < links.length - 1 && <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />}
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function Services() {
//   const titleControls = useAnimation();
//   const titleRef = useRef();
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       if (scrollTop > lastScrollTop) {
//         titleControls.start('visible');
//       } else if (scrollTop < lastScrollTop) {
//         if (titleRef.current) {
//           titleRef.current.style.opacity = '1';
//           titleRef.current.style.transform = 'none';
//         }
//       }
//       setLastScrollTop(scrollTop);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollTop, titleControls]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           titleControls.start('visible');
//         } else {
//           titleControls.start('hidden');
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }

//     return () => observer.disconnect();
//   }, [titleControls]);

//   return (
//     <section className="min-h-screen w-screen bg-white py-10 flex flex-col items-center">
//       <motion.div
//         ref={titleRef}
//         initial="hidden"
//         animate={titleControls}
//         variants={{
//           hidden: { opacity: 0, x: -80 }, // heading left slide in animation
//           visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
//         }}
//         className="container mx-auto px-6"
//       >
//     <motion.div className="relative flex items-center justify-center mb-4">
//   <div className="hidden sm:block flex-grow border-t-2 border-third lg:mx-6 md:mx-4"></div>
//   <motion.h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-second">
//     SERVICES & SPECIALIZATION
//   </motion.h1>
//   <div className="hidden sm:block flex-grow border-t-2 border-third lg:mx-6 md:mx-4"></div>
// </motion.div>






//         {/* <motion.h1 className="relative text-4xl font-bold text-center mb-4 text-second before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//           SERVICES & SPECIALIZATION
//         </motion.h1> */}
        
//         <motion.h2 className="text-2xl text-center mb-8 text-first">Rapid Recovery Realized.</motion.h2>
//       </motion.div>
//       <div className='max-w-5/6 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 h-full justify-center gap-20'>
//         <ServiceBox title="Bariatrics / Weight loss" imageSrc="/weightloss.jpg" links={[
//           { href: "#", text: "Bariatric surgery" },
//           { href: "#", text: <>Non-surgical weight loss <br /> program</> },
//           { href: "#", text: "Surgery for diabetes" },
//           { href: "#", text: "Intragastric Balloon" },
//         ]} />
//         <ServiceBox title="Laparoscopic Surgery" imageSrc="/surgery.jpeg" links={[
//           { href: "#", text: "Gall stones" },
//           { href: "#", text: "Hernia" },
//           { href: "#", text: "Rectal prolapse" },
//           { href: "#", text: "Appendix" },
//           { href: "#", text: "Gerd" },
//         ]} />
//         <ServiceBox title="Laser Surgery" imageSrc="/laserSurgery.jpg" links={[
//           { href: "#", text: "Hemorrhoids/Piles" },
//           { href: "#", text: "Anal fissure" },
//           { href: "#", text: "Pilonidal sinus" },
//           { href: "#", text: "Anal fistula" },
//           { href: "#", text: "Lipoma" },
//           { href: "#", text: "Circumcision" },
//         ]} />
//       </div>
//     </section>
//   );
// }

// export default Services;













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
