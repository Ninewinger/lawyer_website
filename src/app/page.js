"use client";
import Presentation from '@/app/components/Presentation';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/About';
import Personal from '@/app/components/Personal';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Presentation />
      <About />
      <Personal />
    </main>
  );
}
