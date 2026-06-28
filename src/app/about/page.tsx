import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <Header />
      <section className="py-24 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-500">
          We're building this app step by step, the right way.
        </p>
      </section>
      <Footer />
    </main>
  );
}