import About from "./components/About";
import Blog from "./components/Blog";
import BookAppointment from "./components/BookAppointment";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hospitals from "./components/Hospitals";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <BookAppointment/>
      <Hospitals/>
      <Team/>
      <Testimonials/>
      <Choose/>
      <Blog/>
      <Footer/>
    </>
  );
}
