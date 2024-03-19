"use client"

import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { LuFileJson } from "react-icons/lu";
import { IoDocumentText , IoImages } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);
  return (
    <section className="w-full py-12">
      <div className="container grid gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-blue-900" data-aos="fade-left">Explore Our Features</h2>
          <p className="text-gray-900 dark:text-gray-400" data-aos="fade-up" data-aos-delay="50">Browse the tools and utilities available to you.</p>
        </div>
        <div className="space-y-2">
        <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gray-800 group" data-aos="fade-zoom-in" data-aos-delay="350">
              <CardContent className="flex gap-4 items-start p-4 transition-all rounded-md hover:bg-slate-900">
                <IoDocumentText className="text-white w-10 h-10 group-hover:scale-150 transition-all"/>
                <div className="grid gap-1.5">
                  <CardTitle className="text-lg font-bold text-white group-hover:translate-x-4 transition-all">Document Search</CardTitle>
                  <CardDescription className="group-hover:translate-x-4 transition-all delay-75">Quickly find the documents you need with our advanced search capabilities</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 group" data-aos="fade-zoom-in" data-aos-delay="600">
              <CardContent className="flex gap-4 items-start p-4 transition-all rounded-md hover:bg-slate-900">
                <IoImages className="text-white w-10 h-10 group-hover:scale-150 transition-all"/>
                <div className="grid gap-1.5">
                  <CardTitle className="text-lg font-bold text-white group-hover:translate-x-4 transition-all">Image search</CardTitle>
                  <CardDescription className="group-hover:translate-x-4 transition-all delay-75">Discover new content by searching with images</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 group" data-aos="fade-zoom-in" data-aos-delay="800">
              <CardContent className="flex gap-4 items-start p-4 transition-all rounded-md hover:bg-slate-900" >
              <LuFileJson className="text-white w-10 h-10 group-hover:scale-150 transition-all"/>
                <div className="grid gap-1.5">
                  <CardTitle className="text-lg font-bold text-white group-hover:translate-x-4 transition-all">Content Repurpose</CardTitle>
                  <CardDescription className="group-hover:translate-x-4 transition-all delay-75">Transform your content into JSON or Excel formats</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 group" data-aos="fade-zoom-in" data-aos-delay="1000">
              <CardContent className="flex gap-4 items-start p-4 transition-all rounded-md hover:bg-slate-900">
                <FaCode className="text-white w-10 h-10 group-hover:scale-150 transition-all"/>
                <div className="grid gap-1.5">
                  <CardTitle className="text-lg font-bold text-white group-hover:translate-x-4 transition-all">API Key</CardTitle>
                  <CardDescription className="group-hover:translate-x-4 transition-all delay-75">Integrate your applications with our API (Coming Soon)</CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    
  )
}