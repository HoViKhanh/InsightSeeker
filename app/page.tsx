"use client"
import { useState, useEffect } from 'react';
import Link from "next/link"

import {DarkModeToggle} from "@/components/dark-mode-toggle";
import { Hero } from '@/components/Hero';
import {Introduction} from '@/components/Introduction';
import { Feature } from '@/components/Feature';
import { Contact } from '@/components/Contact';
import { About } from '@/components/About';
import "../css/animate.css"



export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <header className="p-4 flex h-20 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <Link className="mr-4 flex items-center transition-all hover:tracking-widest" href="#">
          <img alt="Insight Seeker Logo" className="h-14 w-14 mr-2" src="/logo-retouch.png"/><b>Insight Seeker</b>
        </Link>
        <nav className="flex-1 flex items-center justify-center gap-4 text-base font-semibold">
          <Link
            className="transition-all group inline-flex items-center rounded-md duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="group inline-flex items-center rounded-md transition-all duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1"
            href="#feature"
          >
            Features
          </Link>
          <Link
            className="group inline-flex items-center rounded-md transition-all duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="group inline-flex items-center rounded-md transition-all duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <DarkModeToggle/>
      </header>
      <Hero/>
      <Introduction/>
      <div id="feature"><Feature/></div>
      <div id="contact"><Contact/></div>
      <About/>
    </main>
  );
}
