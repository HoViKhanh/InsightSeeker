"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HiOutlineMail } from 'react-icons/hi'; // Importing the email icon

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Contact() {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);
  return (
    <section className="dark:bg-gray-900 bg-soft-skyblue bg-opacity-40 py-12">
      <div className="container px-4">
        <div className="grid gap-8 lg:gap-12 items-center max-w-3xl mx-auto lg:max-w-none lg:grid-cols-2">
          <div className="relative w-full h-full aspect-w-4 aspect-h-3 lg:aspect-none">
            <img
              alt="Contact image"
              className="object-cover rounded-xl max-w-full h-full"
              src="/contact.jpg"
              data-aos="zoom-in"
            />
          </div>
          <div className="grid gap-6" id="contact-header">
            <div className="flex items-center" data-aos="fade-left">
              <HiOutlineMail className="text-4xl mr-2" />
              <h2 className="text-3xl font-bold ">Contact Us</h2>
            </div>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#contact-header">
                  <Label htmlFor="name" className="">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="dark:bg-gray-900"/>
                </div>
                <div data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#contact-header">
                  <Label htmlFor="email" className="">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" className="dark:bg-gray-900 " />
                </div>
              </div>
              <div className="grid gap-2" data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#contact-header">
                <Label htmlFor="message" className="">Message</Label>
                <Textarea className="min-h-[100px] resize-none dark:bg-gray-900" id="message" placeholder="Enter your message" />
              </div>
              <div className="grid gap-4">
                <Button type="submit" className="py-3 rounded-md transition-colors duration-300 ease-in-out border-2 border-cyan-50" data-aos="fade-up" data-aos-anchor="#contact-header">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
