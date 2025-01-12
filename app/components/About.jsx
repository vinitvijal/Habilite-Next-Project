import React from 'react'
import * as Separator from "@radix-ui/react-separator";

function About() {
  return (
    <section className='h-fit px-5 lg:px-32 py-5 w-full'>
      <p className='text-first text-3xl lg:text-5xl mb-4 text-left'>About Us</p>
      <Separator.Root orientation="horizontal" className="mx-0 w-1/4 lg:w-1/12 h-[1px] bg-third" />

      <div className="upper-content flex flex-col lg:flex-row mt-8 lg:mt-3">
        <div className="content mt-8 lg:mr-5">

          	<p className='text-xl lg:text-3xl text-second'>Best Laparoscopic, Laser and Weight Loss Surgery in Delhi</p>

          	<p className='mt-7 text-sm lg:text-base'>Dr Kapil Agrawal is a senior & experienced surgeon having more than 20 yrs of dedicated service in the field of surgery, especially Advanced Laparoscopic Surgery / Bariatric and Laser Surgery. Throughout his career, he has distinguished himself through innovative practice methods, groundbreaking research and an unwavering pledge to patient welfare.</p>
          	<p className='mt-7 text-sm lg:text-base'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. As a pioneer in the field of obesity management, he always advocates for holistic approaches, emphasizing the pivotal role of dietary changes and medical interventions in combating this global health epidemic. Having performed more than 7000+ advanced laparoscopic and bariatric surgeries, he is well known for his unparalleled expertise and compassionate patient care. He is fully committed to surgical excellence and patient well-being.</p>
          	<p className='font-semibold text-first text-lg mt-10 lg:mt-16'>Dr. KAPIL AGRAWAL</p>
          	<p className='text-sm lg:text-base'>MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS</p>
          	<p className='font-semibold text-first text-sm lg:text-base'>Senior Consultant, Laparoscopic & Laser Surgeon</p>
        </div>

        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start lg:w-full lg:h-1/2">
          <img src="/doctor.webp" className='' width={500} height={500} alt="Doctor's Image" />
        </div>
      </div>

      <div className="flex justify-center lg:justify-start">
        <button className='mt-8 w-28 p-[6px] duration-300 border-first border-[1px] rounded-md hover:bg-first hover:text-white text-first'>Know More</button>
      </div>

      <div className="lower-content  mt-14">
        <p className='text-xl lg:text-3xl text-second text-left'>Best Laparoscopic, Laser and Weight Loss Hospital in Delhi</p>

        <div className="mt-8 lg:w-3/4">
          <p className='mt-5 text-sm lg:text-base'><span className='font-semibold'>Habilite Clinics</span>, one of the best hospital for laparoscopic and laser surgery in New Delhi, is well renowned for its comprehensive services in weight management, advanced laparoscopic surgeries, and treatment of various anorectal disorders.</p>
          <p className='mt-5 text-sm lg:text-base'>Located in South Delhi, Habilite Clinics is distinguished by its multidisciplinary approach, assembling a team of highly experienced and internationally trained surgeons, dieticians, and medical professionals all under one roof. Their collaboration ensures that patients receive personalized care tailored to their unique needs and aspirations.</p>
          <p className='mt-5 text-sm lg:text-base'>Habilite Clinics has established itself as one of the best centres for weight loss. For those looking for the best and sustainable weight loss solutions, the clinic offers more than just a solution - it offers a transformational experience.</p>
          <p className='mt-5 text-sm lg:text-base'>Habilite Clinics offers a complete range of treatment modalities including advanced laser surgeries for the management of various anorectal disorders, circumcision, and treatment of lipoma. Habilite Clinics crafts personalized care plans that mitigate recurrence and minimize discomfort, ensuring a swift and smooth recovery for every patient.</p>
          <p className='mt-5 text-sm lg:text-base'>Habilite clinics also offer advanced laparoscopic surgeries for the management of gallstones, hernia, acute appendicitis, and rectal prolapse. From initial assessments to post-operative care by a multi-disciplinary team, patients benefit from the latest surgical techniques administered with precision and finesse.</p>
        </div>
      </div>
    </section>
  )
}

export default About
