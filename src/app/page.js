import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
// import Projects from "@/components/Projects";



export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Projects /> */}
      <Pricing />
      <Footer />
    </>
  );
}