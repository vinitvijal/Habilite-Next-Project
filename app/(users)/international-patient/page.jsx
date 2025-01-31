'use client'
import TextAnimate from "@/components/ui/anim-text"
import { motion } from "motion/react"

const paraVar = {
    initial: { 
        opacity: 0,
        y: 20,
    },
    animate: (id) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * Number(id),
        }
    })
}

const variants = {
    initial: { opacity: 0, x: 20 },
    animate: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: custom * 0.2, 
        },
    }),
};

const imgVariants = {
    initial: { opacity: 0, x: 20 },
    animate: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: custom * 0.08, 
        },
    }),
};

const Page = () => {  
    // Define image sources and titles
    const images = [
        { src: "/images/ig1.jpg", title: "Bariatric Surgery", subtitle: "Successful, Significant, Sustained Weight Loss" },
        { src: "/images/ig2.jpg", title: "Gall Stone Removal Surgery", subtitle: "Get Relief in A Fast and Easy Way"  },
        { src: "/images/ig3.jpg", title: "Laparoscopic Hernia Repair", subtitle: "Permanent Cure, Faster Recovery"  },
        { src: "/images/ig4.jpg", title: "Advanced laparoscopic surgeries", subtitle: "Best solutions, latest techniques"  },
        { src: "/images/ig5.jpg", title: "Single Port Laparoscopic Surgeries", subtitle: "Less Pain More Gain"  },
        { src: "/images/ig6.jpg", title: "Surgery for Diabetes", subtitle: "Live at ease without diabetes"  }
    ];

    return (
        <div className='h-full pt-16 pb-32 w-screen'>
            <div className="md:px-20 px-10">
                <div className='flex md:flex-row flex-col md:gap-0 gap-10 md:items-start items-center w-full'>
                    <div className='md:w-1/3'>
                        <motion.img initial={{x:-20, opacity:0}} 
                                animate={{x:0, opacity:1}}
                                whileInView="animate" 
                                viewport={{ once: true }}  src='/images/ip.jpg' alt="International Patient" className='rounded-lg shadow' />
                    </div>
                    <div className='md:w-2/3 space-y-2 max-w-4xl whitespace-normal text-lg text-black'>
                        {[1, 2].map(id => (
                            <motion.div 
                                key={id} 
                                variants={paraVar} 
                                initial="initial" 
                                animate="animate" 
                                whileInView="animate" 
                                viewport={{ once: true }} 
                                custom={id} 
                            >
                                {id === 1 ? (
                                    "International Patient in India has taken a giant stride in the past few years because of high standards yet affordable health care services. Habilite Bariatrics introduces itself as one stop portal to serve patients for bariatrics and advanced laparoscopic surgeries."
                                ) : (
                                    "Our expertise and experience in dealing with complex cases, providing complete spectrum of bariatric surgeries as well as advanced laparoscopic surgeries makes us a leader in our area of specialty. Our team is associated with some of the top most, JCI accredited hospitals in New Delhi, India which itself speaks about our commitment and quality of service we intend to provide to our patients."
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:px-20 px-10">
                <div className="mt-16 flex md:flex-row md:gap-[0.6vw] flex-col">
                    <TextAnimate text="Choosing" type="calmInUp" className="uppercase text-2xl md:text-3xl text-center font-bold whitespace-normal text-fourth" />
                    <TextAnimate text="habilite clinics" type="calmInUp" className="uppercase text-2xl md:text-3xl text-center font-bold whitespace-normal text-fourth" />
                    <TextAnimate text="for treatment" type="calmInUp" className="uppercase text-2xl md:text-3xl text-center font-bold whitespace-normal text-fourth" />
                </div>
                <div className="flex justify-start mt-8 flex-col gap-6">
                    {[
                        {
                            title: "Affordable comprehensive health care",
                            content:
                                "Our well experienced team can provide you with a wide spectrum of bariatric and advanced laparoscopic surgeries. We always believe in safe, cost effective and high-quality services. We are dedicated to provide you the latest, most advanced treatment in accordance with the international guidelines in the set up that meets the same rigorous standards laid down by international hospital governance bodies."
                        },
                        {
                            title: "Providing accommodation",
                            content:
                                "Our center network ensures patients to have a safe, comfortable experience to recuperate well and have a memorable stay in India. We help you provide with hotels as well as apartments depending upon your preference. All the accommodations are checked by our team to ensure enjoyable and pleasant stay."
                        },
                        {
                            title: "All inclusive service",
                            content:
                                "Our practice guarantees no hidden fees or additional out-of-pocket expenses. We provide an all-inclusive package which covers up all your expenses during your stay in India. We ensure all your needs are met with eagerness and respect and someone is there to assist you, escort you from the time you land at airport."
                        },
                        {
                            title: "What to expect",
                            content:
                                "On the day of your treatment, you will undergo several routine tests. After the reports are available, you will meet your surgeon, to discuss your concerns, clarify your doubts, completely understand the benefits and risks associated with the procedure and undergo a final examination before your surgery."
                        },
                        {
                            title: "Communication",
                            content:
                                "We strictly believe that quick, hassle free communication is one of the most essential part which determines the satisfaction of the patient and quality of our services. Our team is in constantly touch with you to ensure a smooth post-operative journey. We are easily approachable and in case you feel any problem after you return back to your country, our team can guide you or your treating doctor with our set protocols. Our nutritionists and doctors will be in constant touch with you be it your weight loss journey or post laparoscopy recovery."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            whileInView="animate"
                            custom={index} 
                            viewport={{ once: true }}
                            className="flex flex-col gap-2 items-start"
                        >
                            <div className="text-xl md:text-2xl font-bold whitespace-normal text-second uppercase text-left">{item.title}</div>
                            <div className="max-w-7xl whitespace-normal text-lg">{item.content}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-20 flex gap-10 md:pr-20 md:px-0 px-10">
                <div className="hidden md:block bg-fourth md:h-[65vh] w-[5vw] rounded-r-lg"></div>
                <div className="img-gallery flex flex-col gap-6 relative"> 
                    <motion.div
                        className="grid md:grid-cols-3 grid-cols-1 gap-8"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {images.map((image, index) => (
                            <motion.div key={index} variants={imgVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}  className="relative group">
                                <motion.img
                                    src={image.src}
                                    className="-z-10 rounded-lg border-4 border-third md:w-[26vw] w-full saturate-0 group-hover:saturate-100 duration-300 transition-all"
                                    alt={image.title}
                                />
                                <div className="absolute bottom-0 p-1 rounded-b-lg w-full pb-4 group-hover:bg-white/60 group-hover:text-second text-transparent transition-all duration-300">
                                    <div className="font-bold px-4">{image.title}</div>
                                    <div className="font-semibold text-sm px-4 whitespace-normal max-w-[60vw]">{image.subtitle}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Page;
