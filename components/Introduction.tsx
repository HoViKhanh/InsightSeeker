"use client"

import Link from "next/link";

import { FaSpider } from "react-icons/fa";
import { TbVectorBezier2 } from "react-icons/tb";
import { LuPackageSearch } from "react-icons/lu";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export function Introduction() {
    useEffect(() => {
      AOS.init({duration: 1200});
      AOS.refresh();
    }, []);
    return (
      <div>
      <section className="w-full py-6 sm:py-6 md:py-12 lg:py-18 xl:py-24 group" id="introduction-container">
          <div className="container px-8 md:px-12 ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]" data-aos="zoom-in" data-aos-anchor="#introduction-container">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full h-64 lg:order-last lg:aspect-square hover:scale-110 transition-all"
                height="550"
                src="/introduction-section1.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none" data-aos="fade-up" data-aos-anchor="#introduction-container">
                    A unique way to navigate through your content
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400" data-aos="fade-up"> 
                    Introduce a unique method for navigating through your content, designed to simplify and enhance your search experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 group-hover:animate-pulse"
                    href="/search" 
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                  >
                    Get Started
                  </Link>
                  <p
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                  >
                    Read more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>  
        <div className="w-full py-10 lg:py-14 bg-timeline bg-no-repeat bg-bottom bg-cover">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white my-4" data-aos="fade-right">Simplified Content, Streamlined Process</h2>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-10 md:grid-cols-3 md:gap-0 lg:gap-16">
              <div className="flex flex-col items-center justify-center space-y-2 bg-white dark:bg-slate-950 rounded-2xl p-8 hover:bg-opacity-20 dark:hover:bg-opacity-35 transition-all border group hover:scale-110 hover:shadow-xl">
                <div className="rounded-full border-4 border-black dark:border-white overflow-hidden w-16 h-16 group-hover:border-green-600" data-aos="fade-left">
                  <FaSpider className="rounded-full object-cover h-14 w-14"/>
                </div>
                <h3 className="text-xl font-bold group-hover:text-white" data-aos="zoom-in" data-aos-delay="50">Web Crawling</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-400 group-hover:bg-slate-900" data-aos="flip-up" data-aos-delay="100">
                  Catch bugs before they reach production with automated testing.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white dark:bg-slate-950 rounded-2xl p-8 hover:bg-opacity-20 dark:hover:bg-opacity-35 transition-all border group hover:scale-110 hover:shadow-xl">
                <div className="rounded-full border-4 border-black dark:border-white overflow-hidden w-16 h-16 group-hover:border-yellow-400 group-hover" data-aos="fade-left" data-aos-delay="50">
                  <TbVectorBezier2 className=" rounded-full object-cover h-14 w-14"/>
                </div>
                <h3 className="text-xl font-bold group-hover:text-white" data-aos="zoom-in" data-aos-delay="100">Content Vectorization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-400 group-hover:bg-slate-900" data-aos="flip-up" data-aos-delay="150">
                  Collaborate and maintain code quality with built-in code review tools.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white dark:bg-slate-950 rounded-2xl p-8 hover:bg-opacity-20 dark:hover:bg-opacity-35 transition-all border group hover:scale-110 hover:shadow-xl">
                <div className="rounded-full border-4 border-black dark:border-white overflow-hidden w-16 h-16 group-hover:border-blue-400" data-aos="fade-left" data-aos-delay="100">
                  <LuPackageSearch className=" rounded-full object-cover h-14 w-14"/>
                </div>
                <h3 className="text-xl font-bold group-hover:text-white" data-aos="zoom-in" data-aos-delay="150">Semantic Search</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-400 group-hover:bg-slate-900" data-aos="flip-up" data-aos-delay="200">
                  Optimize your app with performance insights and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }