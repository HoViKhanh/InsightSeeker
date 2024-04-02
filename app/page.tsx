"use client"
import { Hero } from '@/components/Hero';
import {Introduction} from '@/components/Introduction';
import { Feature } from '@/components/Feature';
import { Contact } from '@/components/Contact';
import { About } from '@/components/About';
import "../css/animate.css"


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero/>
      <Introduction/>
      <div id="feature"><Feature/></div>
      <div id="contact"><Contact/></div>
      <About/>
    </main>
  );
}
