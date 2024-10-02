"use client";
import Presentation from '@/app/components/Presentation';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/About';
import Personal from '@/app/components/Personal';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Presentation />
      <About />
      <Personal />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
