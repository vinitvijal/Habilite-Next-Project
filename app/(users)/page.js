import About from "./components/About";
import Blog from "./components/Blog";
import Choose from "./components/Choose";
import Hero from "./components/Hero";
import Hospitals from "./components/Hospitals";
import Services from "./components/Services";
import Team from "./components/Team";
import FAQs from "./components/FAQs";
import TestimonialCarouselEnhanced from "./components/TestEnhanced";




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
