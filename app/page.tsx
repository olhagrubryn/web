import Image from "next/image";
import Hero from "@/components/Hero";
import { FaHome } from 'react-icons/fa';
import { FloatingNav } from "@/components/ui/floatingNavbar";
import Grid from "@/components/Grid";
import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
    <main
      className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]} />
        <Hero />
        <Grid />
        <ContactForm /> {/* Add the contact form here */}
      </div>
    </main>
  );
}
