import Benefits from "@/components/Benefits";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/Herosection";
import Ingredients from "@/components/Ingredients";
import NavBar from "@/components/Navbar";
import CoffeeProducts from "@/components/CoffeeProducts";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Ingredients/>
      <Benefits/>
      <ContactUs/>
      <CoffeeProducts/>
      <Footer/>
    </div>
  );
}
