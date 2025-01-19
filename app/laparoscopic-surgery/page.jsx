import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FAQsingle from '../components/FAQsingle'

function page() {
  return (
    <>
    <Header />
    <div className='pt-24 pb-16 px-32'>
      <div className="flex justify-center mx-auto">
        <div className="w-1/2 items-center px-4 ">
          <h1 className='text-5xl font-medium py-2 text-second'>Laparoscopic Surgery</h1>
          <p className='sm:py-4 sm:pr-8 text-first text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore eum dolore. Iste ab hic, asperiores sequi ea eaque? Cumque deserunt veritatis possimus deleniti itaque ratione quis distinctio quo minima?</p>
        </div>
        <div className="w-1/2">
          <img src="https://kmch.in/wp-content/uploads/2023/04/laparoscopic.jpg" className='h-80 w-full surgeryCurve rounded-md' alt="laparoscopic img" />
        </div>
      </div>

      <h1 className="text-3xl font-medium text-second mt-20 px-8 ">Laparoscopic Surgeries We Offer</h1>

      <div className="mt-8 flex flex-col space-y-16 px-8">

        <div className="flex mx-auto  justify-center items-center rounded-md overflow-hidden shadow-sm shadow-third w-fit">
          <div className="w-3/5 px-10 ">  
            <h1 className="text-2xl font-medium">Gall Stones</h1>
            <p className="sm:py-2">The field of gallbladder stone surgery has gone under a major transformation due to the introduction of newer technologies aimed at quick and painless recovery. Dr Kapil Agrawal, the best gallbladder surgeon in Delhi, has been delivering excellent outcomes due to his expertise in all the latest treatment modalities for gallstone surgery.</p>
            <span className='text-first'><a href="#">Read More..</a></span>
          </div>
          <div className='w-2/5'>
          <img src="https://assets.clevelandclinic.org/transform/9274adc4-75e7-42a6-a92a-9bda494aefa9/18-DDI-4879-Gallstones-Hero-Image-650x450pxl_jpg" alt="gall stones pic" className='h-72 w-full surgeryCurve ' />
          </div>
        </div>

        <div className="flex flex-row-reverse mx-auto  justify-center items-center rounded-md overflow-hidden shadow-sm shadow-third w-fit">
          <div className="w-3/5 px-10 ">  
            <h1 className="text-2xl font-medium">Hernia</h1>
            <p className="sm:py-2">The last decade has seen revolutionary changes in managing hernia in terms of hernia repair and the evolution of highly advanced mesh and mesh fixation devices. Dr Kapil Agrawal, Best Hernia Specialist Surgeon, has expertise in all the modern and advanced hernias repairs. He makes sure that his patients get the best and personalized treatment for different type of hernia repairs.</p>
            <span className='text-first'><a href="#">Read More..</a></span>
          </div>
          <div className='w-2/5'>
          <img src="https://aparanthospital.com/images/inguinal-and-umbilical-hernia-surgery.jpg" alt="gall stones pic" className='h-72 w-full surgeryCurveRev ' />
          </div>
        </div>

        <div className="flex mx-auto  justify-center items-center rounded-md overflow-hidden shadow-sm shadow-third w-fit">
          <div className="w-3/5 px-10 ">  
            <h1 className="text-2xl font-medium">Rectal Prolapse</h1>
            <p className="sm:py-2">Rectum is last part of the intestine where feces or stools is stored before being passed. When the rectum lining becomes weak or detached from the body, rectum starts protruding from the anus, a condition called as rectal prolapse. Although a few numbers of patients, especially with partial rectal prolapse can be managed conservatively and certain dietary and life style modifications, majority of patients will require some form of surgical intervention for permanent cure of this disease.</p>
            <span className='text-first'><a href="#">Read More..</a></span>
          </div>
          <div className='w-2/5'>
          <img src="https://kkonstantinidis.com/wp-content/uploads/2024/09/AdobeStock_364106962-scaled.jpeg.webp" alt="gall stones pic" className='h-72 w-full surgeryCurve ' />
          </div>
        </div>

        <div className="flex flex-row-reverse mx-auto  justify-center items-center rounded-md overflow-hidden shadow-sm shadow-third w-fit">
          <div className="w-3/5 px-10 ">  
            <h1 className="text-2xl font-medium">Appendix</h1>
            <p className="sm:py-2">Acute appendicitis is a medical emergency that requires prompt diagnosis and management to prevent serious complications. Dr Kapil Agrawal, one of the best appendicitis specialist in delhi, has handled complicated cases with excellent outcomes. He has an overall experience of more than 22 years and has performed more than 2000 laparoscopic appendicectomies.</p>
            <span className='text-first'><a href="#">Read More..</a></span>
          </div>
          <div className='w-2/5'>
          <img src="https://reverehealth.com/_next/image/?url=https%3A%2F%2Frevere-health.hqdemo.app%2Fwp-content%2Fuploads%2FiStock-533706734.jpg&w=2048&q=75" alt="gall stones pic" className='h-72 w-full surgeryCurveRev ' />
          </div>
        </div>

        <div className="flex mx-auto  justify-center items-center rounded-md overflow-hidden shadow-sm shadow-third w-fit">
          <div className="w-3/5 px-10 ">  
            <h1 className="text-2xl font-medium">Gerd</h1>
            <p className="sm:py-2">With the development of reliable laparoscopic surgical techniques, as well as more potent medical treatments, the treatment algorithm of GERD has changed. Our high volume and advanced, cutting edge technology combined with expert specialists means you are getting the superior care you deserve.</p>
            <span className='text-first'><a href="#">Read More..</a></span>
          </div>
          <div className='w-2/5'>
          <img src="https://www.laintegrativegi.com/wp-content/uploads/2020/03/gerd.jpg" alt="gall stones pic" className='h-72 w-full surgeryCurve ' />
          </div>
        </div>

      </div>

      <div className="">
        <FAQsingle 
          answer="Recovery time varies depending on the procedure, but most patients can return to normal activities within 2-4 weeks."
          question="How long is the recovery time after surgery?"
        />
        <FAQsingle 
          answer="Recovery time varies depending on the procedure, but most patients can return to normal activities within 2-4 weeks."
          question="How long is the recovery time after surgery?"
        />
        <FAQsingle 
          answer="Recovery time varies depending on the procedure, but most patients can return to normal activities within 2-4 weeks."
          question="How long is the recovery time after surgery?"
        />
      </div>

    </div>
    <Footer />
    </>
  )
}

export default page
