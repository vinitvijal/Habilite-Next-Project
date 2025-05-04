import About from "./components/About";
import Blog from "./components/Blog";
import BookAppointment from "./components/BookAppointment";
import Choose from "./components/Choose";
import Hero from "./components/Hero";
import Hospitals from "./components/Hospitals";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import TestimonialCarouselEnhanced from "./components/TestEnhanced";

export const metadata = {
  title: "Best Laparoscopic, Laser and Weight Loss Surgery Hospital in Delhi",
  description: "Best Laparoscopic, Laser and Weight Loss Surgery Hospital in DelhiHabilite Clinics is best hospital in Delhi, India provides world-class proven treatment include Weight Loss Surgery, Laparoscopic & Laser Surgery in Delhi.",
  keywords: "best laparoscopic surgery hospital in Delhi, Weight Loss Surgery Hospital in Delhi, Laser Surgery Hospital in Delhi, best hospital in Delhi, best clinic in Delhi"
  ,
  alternates: {
    canonical: "https://www.habiliteclinics.com/"
  },
  openGraph: {
    images: [
      "https://www.habiliteclinics.com/images/about/dc1.png"
    ]
  },
  facebook: {
    app_id: "https://www.facebook.com/habilite/"
  }
};


export default function Home() {
  return (
    <div className="mainpage">
      <Hero/>
      <About/>
      <Services/>
      <Hospitals/>
      <Team/>
      {/* <Testimonials /> */}
      <TestimonialCarouselEnhanced />
      <Choose/>
      <FAQs/>
      <Blog/>
    </div>
  );
}
