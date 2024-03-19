"use client"

import Link from "next/link";
import "./animate.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);
 return (
    <div className="relative bg-gray-100 dark:bg-gray-950 h-full" data-aos="fade-zoom-up">
        <img
          alt="Hero"
          className="aspect-video overflow-hidden object-cover w-full h-96"
          src="/hero-image.jpg"
        />
      <img alt="RainOverlay" className="absolute inset-0 h-full w-full opacity-30" src="/rain-overlay.gif"/>
      <img alt="Fog1" className="absolute inset-0 h-full w-full animate-pulse" src="/fog-1.png"/>
      <img alt="Fog1" className="absolute inset-0 h-full w-full animate-pulse" src="/fog-2.png"/>

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-16 text-center">
        <div className="space-y-6" >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl m-y-5 transition-all text-white" data-aos="fade-up">
            Welcome to <span className="animate-charcter">Insight Seeker</span>
          </h1>
          <p className="mx-auto px-5 md:text-xl/relaxed max-w-6xl text-green-500 bg-slate-900 font-extralight" data-aos="fade-left" data-aos-delay="100">
            Elevate your research with the power of AI and semantic search to unlock new insights & streamline your workflow
          </p>
        </div>
        <div>
        {/* <Link className="inline-flex items-center justify-center rounded-md border border-gray-20 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="#">
              Get Started 
          </Link> */}
        </div>
      </div>
    </div>
 );
}