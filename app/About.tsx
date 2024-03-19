"use client"

import Link from "next/link"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-about bg-no-repeat bg-cover">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="text-center space-y-2">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl max-w-2xl text-orange-500" data-aos="fade-up">We are on a mission to supercharge the searching content experience</h2>
          </div>
          <p className="max-w-[700px] text-white italic md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400" data-aos="fade-up" data-aos-delay="50">
          Our platform is designed to supercharge the searching content experience, empowering you to innovate. We believe that the best products are built by individuals who can focus on creativity instead of infrastructure. Let us handle the tools so you can focus on the vision.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}