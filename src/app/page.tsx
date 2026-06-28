import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Counter/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
