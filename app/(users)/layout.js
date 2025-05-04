
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookAppointment from "./components/BookAppointment";



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
export default function RootLayout({ children }) {
  return (
    <main className=" w-screen min-h-screen flex flex-col items-center justify-between">
        <Header />
        {children}

          <BookAppointment/>
        <Footer />
    </main>
  );
}
