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


export default function Home() {
  return (
    <div className="mainpage">
      <Hero/>
      <About/>
      <Services/>
      <BookAppointment/>
      <Hospitals/>
      <Team/>
      <Testimonials />
      <Choose/>
      <FAQs/>
      <Blog/>
    </div>
  );
}
